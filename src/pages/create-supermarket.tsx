import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6";
import FormSupermarket from "components/common/FormSupermarket";

const CreateSupermarket = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const [supermarketImage, setSupermarketImage] = useState({ name: "", url: "" });
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result: string) => setSupermarketImage({ name: file?.name, url: result }));
  };

  const onFinishHandler = async (data: FieldValues) => {
    if (!supermarketImage.name) return alert("Please select an image");

    await onFinish({
      ...data,
      photo: supermarketImage.url,
      email: user.email,
    });
  };

  return (
    <FormSupermarket type="Create" register={register} onFinish={onFinish} formLoading={formLoading} handleSubmit={handleSubmit} handleImageChange={handleImageChange} onFinishHandler={onFinishHandler} supermarketImage={supermarketImage} />
  );
};
export default CreateSupermarket;
