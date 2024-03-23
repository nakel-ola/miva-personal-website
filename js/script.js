const uploadCard = document.getElementsByClassName("form-upload")[0];
const inputCard = document.getElementById("input-chnage");

let resume = null;

const form = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
  uploadCard.classList.add("form-upload-active");
};

const handleDragLeave = () => {
  uploadCard.classList.remove("form-upload-active");
};

const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();

  const files = [...e.dataTransfer.files];

  if (files && files.length > 0) {
    const file = files[0];
    const isPDF = !![".pdf"].find((format) =>
      file.name.toLowerCase().endsWith(format.toLowerCase())
    );

    if (isPDF) resume = file;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const handleChange = (e) => {
  form[e.target.name] = e.target.value;

  console.log(e.target);
};

inputCard.addEventListener("change", handleChange);
