import * as Yup from "yup";

export const AddProdSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Explaination: Yup.string()
    .min(20, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
  imgURL: Yup.string()
    .min(10, "Too Short!")
    .max(5000, "Too Long!")
    .required("Required"),
});
