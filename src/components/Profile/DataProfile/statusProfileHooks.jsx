import React from "react";
import PreloaderSmall from "../../common/Preloader/PreloaderSmall";
import { useState, useEffect } from "react";

const StatusProfile = ({status,userId,updateStatus,getStatus}) => {

  let [editMode, setEditMode] = useState(false);
  let [statusLocal, setStatus] = useState(status);
  useEffect(() => {
    setStatus(status);
    getStatus(userId);
  }, [status, userId]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(statusLocal);
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
            {status ? status : <PreloaderSmall />}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={statusLocal}
          />
        </div>
      )}
    </div>
  );
};

export default StatusProfile;
