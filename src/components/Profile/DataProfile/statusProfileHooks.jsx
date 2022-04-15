import React from "react";
import PreloaderSmall from "../../common/Preloader/PreloaderSmall";
import { useState, useEffect } from "react";

const StatusProfile = ({ status,userId, updateStatus, getStatus }) => {
  let [editMode, setEditMode] = useState(false);
  let [statusLocal, setStatus] = useState(status);
  useEffect(() => {
	 getStatus(userId);
  }, []);
	useEffect(() => {
			setStatus(status);	  
  }, []);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    if (status !== statusLocal) {
      updateStatus(statusLocal);
    }
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            Status: {status ? status : <PreloaderSmall />}
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



export default React.memo(StatusProfile);
