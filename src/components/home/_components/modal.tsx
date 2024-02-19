import { Button, Modal } from "antd";
import { FaWpforms } from "react-icons/fa";
import { useState } from "react";
import { RiFilePaper2Line } from "react-icons/ri";
const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="text" onClick={showModal}></Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <div>
            <div>
              <FaWpforms />
            </div>
            <div>
              <p>KKA</p>
            </div>
          </div>
          <div>
            <div>
              <RiFilePaper2Line />
            </div>
            <div>
              <p>LHA</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
