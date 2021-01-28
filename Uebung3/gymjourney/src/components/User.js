import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
};

const User = (props) => {
  const [showEditInputs, setShowEditInputs] = useState(false);
  const {
    value: firstname,
    bind: bindfirstname,
    reset: resetfirstname,
  } = useInput("");
  const { value: surname, bind: bindsurname, reset: resetsurname } = useInput(
    ""
  );
  const { value: email, bind: bindemail, reset: resetemail } = useInput("");
  const {
    value: password,
    bind: bindpassword,
    reset: resetpassword,
  } = useInput("");
  const { value: role, bind: bindrole, reset: resetrole } = useInput("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectValue, setSelectValue] = useState(props.role);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleEditCallback(
      firstname ? firstname : props.firstname,
      surname ? surname : props.surname,
      email ? email : props.email,
      password ? password : props.password,
      props.role !== selectValue ? selectValue : props.role,
      props.user_id
    );
    resetfirstname();
    resetsurname();
    resetemail();
    resetpassword();
    resetrole();
  };

  return (
    <div className="media border mb-3 p-3">
      <div className="media-body">
        <h4>{props.firstname} </h4>
        <h4>{props.surname} </h4>
        <p>{props.email}</p>
        <p>{props.role}</p>
        <p>{props.user_id}</p>

        <Button
          variant="info"
          onClick={() => setShowEditInputs(!showEditInputs)}
          style={{ margin: "5px" }}
        >
          bearbeiten
        </Button>

        <Button
          variant="info"
          onClick={() => setShowDeleteDialog(!showDeleteDialog)}
          style={{ margin: "5px" }}
        >
          löschen
        </Button>
        {showDeleteDialog ? (
          <div>
            <p>Sind Sie sich sicher?</p>
            <Button onClick={() => props.handleDeleteCallback(props.user_id)}>
              Ja
            </Button>
            <Button onClick={() => setShowDeleteDialog(false)}>Nein</Button>
          </div>
        ) : (
          ""
        )}
        {showEditInputs ? (
          <div>
            <input type="text" placeholder="Vorname" {...bindfirstname} />
            <input type="text" placeholder="Nachname" {...bindsurname} />
            <input type="text" placeholder="Email" {...bindemail} />
            <input type="text" placeholder="Passwort" {...bindpassword} />

            <select onChange={(event) => setSelectValue(event.target.value)}>
              {props.role === "user" ? (
                <>
                  <option value="user" name="user">
                    {" "}
                    User
                  </option>
                  <option value="administrator" name="administrator">
                    Administrator
                  </option>
                </>
              ) : (
                <>
                  <option value="administrator" name="administrator">
                    Administrator
                  </option>
                  <option value="user" name="user">
                    {" "}
                    User
                  </option>{" "}
                </>
              )}
            </select>
            <Button onClick={(evt) => handleSubmit(evt)}>absenden</Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default User;
