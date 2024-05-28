import React from "react"; 

{/* This is the edit Profile that needs to be Popping Up */}{/* This is the edit Profile that needs to be Popping Up */}
{/* This is the edit Profile that needs to be Popping Up */}{/* This is the edit Profile that needs to be Popping Up */}
{/* This is the edit Profile that needs to be Popping Up */}{/* This is the edit Profile that needs to be Popping Up */}

const Editprofile = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Edit Profile</h2>
        <form>
          {/* Add your form fields here */}
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <button type="submit">Save</button>

          <button type="close">close</button>
        </form>
      </div>
    </div>
  );
};

export default Editprofile;
