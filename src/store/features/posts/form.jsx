import {useState} from "react";
import {useDispatch} from "react-redux";
import {addPost} from "./postSlice.jsx";
import {nanoid} from "@reduxjs/toolkit";

const Form = () => {
    const [title, setTitle] = useState('');
    const [body , setBody] = useState('');


    const dispatch = useDispatch();

    const canSave = Boolean(title) && Boolean(body);

    const submit = (e) => {
        e.preventDefault();
        dispatch(addPost({
            id : nanoid(),
            title,
            body
        }))
    }

    return (
        <div className={'flex justify-center align-center'}>
            <form className={'mt-20'} onSubmit={submit}>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor="">post title</label>
                    <input type="text" onChange={(e)=> setTitle(e.target.value)} className={'p-2 bg-gray-200 w-[300px]'}/>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor="">post title</label>
                    <textarea rows={5} onChange={(e)=> setBody(e.target.value)} className={'bg-gray-200'}></textarea>
                </div>
                <div className={'text-end mt-2'}>
                    <button type='submit' disabled={!canSave} className={'bg-blue-700 text-red-400 p-3 disabled:bg-blue-100'}>add post</button>
                </div>
            </form>
        </div>
    );
};

export default Form;