import { Button, FileInput, Select, TextInput } from "flowbite-react";
import React ,{useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  const [value, setValue] = useState("");

  return (
    <div className="p-3 max-w-3xl min-h-screen mx-auto">
      <h1 className="text-center text-3xl font-semibold my-7">Create a Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between ">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1 "
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">Javascript</option>
            <option value="react">React</option>
            <option value="node">Node</option>
            <option value="express">Express</option>
            <option value="mongodb">MongoDB</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" id="image" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload Image
          </Button>
        </div>
        <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Write something..." className="h-80 mb-12" required/>
        <Button type="submit" gradientDuoTone="purpleToPink" size="lg">Publish</Button>
      </form>
    </div>
  );
}

export default CreatePost;
