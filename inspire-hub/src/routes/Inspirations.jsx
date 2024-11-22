import { useState } from "react";
import { useInspiration } from "../InspirationsContext";

export default function Inspiration() {
  const [inputText, setInputText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);
  const { items, addItem, editItem, deleteItem } = useInspiration();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleAddItem = async () => {
    if (inputText.trim() || imageFile) {
      const base64Image = imageFile ? await convertToBase64(imageFile) : null;
      const newItem = {
        id: Date.now(),
        text: inputText,
        image: base64Image,
      };
      addItem(newItem);
      resetModal();
    }
  };

  const handleEditItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setInputText(itemToEdit.text);
    setImageFile(null);
    setEditingItemId(id);
    setIsModalOpen(true);
  };

  const handleSaveEditedItem = async () => {
    const base64Image = imageFile
      ? await convertToBase64(imageFile)
      : items.find((item) => item.id === editingItemId).image;
    const updatedItem = {
      id: editingItemId,
      text: inputText,
      image: base64Image,
    };
    editItem(editingItemId, updatedItem);
    resetModal();
  };

  const resetModal = () => {
    setInputText("");
    setImageFile(null);
    setIsModalOpen(false);
    setEditingItemId(null);
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="p-8">
      <h1 className="md:text-md text-2xl font-bold mb-6">
        Inspiration Gallery
      </h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Image or Note
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editingItemId ? "Edit Inspiration" : "Add New Inspiration"}
            </h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4 border rounded-md p-2 w-full"
            />
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Write a note..."
              className="mb-4 border rounded-md p-2 w-full"
              rows="3"
            />
            <div className="flex justify-end">
              <button
                onClick={editingItemId ? handleSaveEditedItem : handleAddItem}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {editingItemId ? "Save" : "Add"}
              </button>
              <button
                onClick={resetModal}
                className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow rounded-lg">
            {item.image && (
              <img
                src={item.image}
                alt="inspiration"
                className="w-full h-48 object-cover rounded-md mb-2"
              />
            )}
            {item.text && <p className="text-gray-700">{item.text}</p>}
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleEditItem(item.id)}
                className="text-white hover:bg-blue-400 bg-blue-500 flex items-center px-4 py-1 border rounded-lg font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
