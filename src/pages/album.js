import '../styles/Card.css'

const Card = ({ heading,index}) => {
    return (
      <div className="card">
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuwH-hdr-I4j6oZFPAm8cJRKO5h5dLypKQkAIRrhLgg&s"} alt="Card Image" />
        <div className="card-content">
          <h3>{`Album-${index+1}`}</h3>
          <p>{heading}</p>
        </div>
        <div className="card-buttons">
          <button className="edit-button">Edit</button>
          <button className="remove-button">Remove</button>
        </div>
      </div>
    );
  };
  
  export default Card;