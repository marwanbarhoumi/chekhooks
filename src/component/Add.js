import React, { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export const Add = ({ handelAdd }) => {
  const [titleMovie, setTitleMovie] = useState("");
  const [descriptionMovie, setDescriptionMovie] = useState("");
  const [posterurlMovie, setPosterurlMovie] = useState("");
  const [ratingMovie, setRatingMovie] = useState(0);
  const handleSumbit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      title: titleMovie,
      description: descriptionMovie,
      posterUrl: posterurlMovie,
      rating: ratingMovie,
    };

    if (!titleMovie || !descriptionMovie || !posterurlMovie || !ratingMovie) {
      return alert("fill the form");
    }
    handelAdd(newMovie);
    closeModal();
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Add movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSumbit}>
          <h1>ADD MOVIE</h1>
          <input
            type="text"
            placeholder=" entre title"
            onChange={(e) => setTitleMovie(e.target.value)}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="entre discription"
            onChange={(e) => setDescriptionMovie(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="entre posterURL"
            onChange={(e) => setPosterurlMovie(e.target.value)}
          />{" "}
          <br />
          <input
            type="number"
            placeholder="entre rating"
            onChange={(e) => setRatingMovie(e.target.value)}
          />
          <br />
          <button>Save</button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
};
