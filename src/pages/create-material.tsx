import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6";
import ForMaterial from "components/common/ForMaterial";

const CreateMaterial = () => {
  const { data: user } = useGetIdentity();
  const [orderImage, setOrderImage] = useState({ name: "", url: "" });
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

    reader(file).then((result: string) => setOrderImage({ name: file?.name, url: result }));
  };

  const onFinishHandler = async (data: FieldValues) => {
    if (!orderImage.name) return alert("Please select an image");

    await onFinish({
      ...data,
      photo: orderImage.url,
      email: user.email,
    });
  };

  return <ForMaterial type="Create" register={register} onFinish={onFinish} formLoading={formLoading} handleSubmit={handleSubmit} handleImageChange={handleImageChange} onFinishHandler={onFinishHandler} orderImage={orderImage} />;
};
export default CreateMaterial;
