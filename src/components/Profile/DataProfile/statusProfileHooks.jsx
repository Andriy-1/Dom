import React from "react";
import PreloaderSmall from "../../common/Preloader/PreloaderSmall";
import { useState, useEffect } from "react";

const StatusProfile = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
    props.getStatus(props.userId);
  }, [props.status, props.userId]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      <hr />
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status ? props.status : <PreloaderSmall />}
          </span>
        </div>
      )}

      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default StatusProfile;
