import { useState, useEffect } from "react";

import Header from "./components/Header";
import Card from "./components/Card";

import { request, del, post, put } from "./services/api";
import mock from "./data/mock.json";

import "./styles/App.css";
import "./styles/reset.css";

function App() {
  const emptyForm = {nome: "", nascimento: "", renda: "", cpf: ""};
  const [formData, setFormData] = useState(emptyForm);
  const [data, setData] = useState(mock);
  const [modal, setModal] = useState("hidden");

  useEffect(() => {
    requestData();
  }, []);

  const requestData = async () => {
    setData(await request());
  };

  const openModal = () => {
    setModal(modal === "show" ? "hidden" : "show");
  };

  const handleDeleteClick = async (e, id) => {
    e.preventDefault();
    if (window.confirm("Tem certeza?")) {
      await del(id);
      requestData();
    }
  };

  const handleEditClick = (e, id) => {
    e.preventDefault();
    const person = data.find((f) => f.id === id);
    setFormData(person);
    openModal();
  };

  const handleTextChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newForm = { ...formData };
    newForm[field] = value;
    setFormData(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = [];

    for (const key in formData) {
      if (key === "id")
        continue
      if (formData[key].toString().trim() === "") validation.push(key);
    }

    if (validation.length > 0) {
      alert(
        "Os seguintes campos não podem estar em branco: " +
          validation.join(", ")
      );
      return;
    }

    try {
      formData.id ? await put(formData) : await post(formData);
      alert("Salvo com sucesso!");
      setFormData(emptyForm);
      openModal();
      requestData();
    } catch (error) {
      alert(error)
    }
  };

  const handleCancelClick = () => {
    setFormData(emptyForm);
    openModal();
  };

  return (
    <div className="App">
      <Header />
      <Card
        data={data}
        formData={formData}
        onDeleteClick={handleDeleteClick}
        onEditClick={handleEditClick}
        onNewClick={openModal}
        onCancelClick={handleCancelClick}
        modalState={modal}
        onSubmit={handleSubmit}
        onTextChange={handleTextChange}
      />
    </div>
  );
}

export default App;
