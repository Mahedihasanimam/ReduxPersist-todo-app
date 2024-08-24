'use client'

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {  Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '@/app/redux/features/TodoSlice';
const TodoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const dispatch =useDispatch()

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const onFinish = (values) => {
    const randomid=Math.random().toString(36).substring(2,7)
    const addTodoInfo={
        id:randomid,
        title:values.title,
        decription:values.decription
    }
    dispatch(addTodo(addTodoInfo))
    setIsModalOpen(false);
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
     <div className='flex items-center justify-between gap-4'>
           <button onClick={showModal} className='btn bg-red-500 px-2  text-white rounded-md '>Add ToDo</button>
    
           <button className='btn bg-blue-500 px-2  text-white rounded-md '>Filter</button>
           </div>
      <Modal  title="Basic Modal" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
  
   
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input your title!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="decription"
      rules={[
        {
          required: true,
          message: 'Please input your decription!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
    className=' flex items-center justify-end'
    >
      <Button  type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>


  </Form>
      </Modal>
    </>
  );
};
export default TodoModal;