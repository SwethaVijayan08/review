import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted: ' + JSON.stringify(formData, null, 2));
    setFormData({
      firstName: '',
      feedback: '',
      rating: '',

    });
  };

  return (
    <div className='flex justify-left items-left min-h-[100vh] mx-auto py-10 px-4 sm:px-6 lg:px-8'>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl primary-color font-bold mb-4">Course Feedback Form</h1>
        <form onSubmit={handleSubmit}>
          <div className='text-xl font-extrabold text-left my-4 text-sky-800'>
            <label className='p-4'>Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className='w-[400px] sm:w-[400px] text-xl font-extrabold p-1 text-left my-4 bg-zinc-200'/>
        </div>
          <div className='text-xl font-extrabold text-left my-4 text-sky-800'>
            <label className='p-1'>How was the class?</label>
            <input type="text" name="feedback"value={formData.feedback} onChange={handleChange} className='w-[400px] sm:w-[400px] text-xl font-extrabold p-1 text-left my-4 bg-zinc-200'/>
          </div>
          <div>
          <label className='p-1 text-sky-800'>How efficient was the materials provided?</label>

          <select name="rating1" value={formData.rating1} onChange={handleChange} className=" text-slate-400 mt-1 p-2 w-full border rounded-md">
            <option className='' value="">Select a rating</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          </div>
          <div>
          <label className='p-1 text-sky-800'>how well Was the course faculty fully prepared?</label>

          <select name="rating2" value={formData.rating2} onChange={handleChange} className=" text-slate-400 mt-1 p-2 w-full border rounded-md">
            <option className='' value="">Select a rating</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          </div>
          <div>
          <label className='p-1 text-sky-800'>How efficient was the practice session?</label>

          <select name="rating3" value={formData.rating3} onChange={handleChange} className=" text-slate-400 mt-1 p-2 w-full border rounded-md">
            <option className='' value="">Select a rating</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          </div>
          <div>
          <label className='p-1 text-sky-800'>How effective was the course?</label>

          <select name="rating4" value={formData.rating4} onChange={handleChange} className=" text-slate-400 mt-1 p-2 w-full border rounded-md">
            <option className='' value="">Select a rating</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          </div>
          <div>
          <label className='p-1 text-sky-800'>How do you rate our Online course on overall?</label>

          <select name="rating5" value={formData.rating5} onChange={handleChange} className=" text-slate-400 mt-1 p-2 w-full border rounded-md">
            <option className='' value="">On a scale of 1 - 10 Give a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

          </select>
          </div>
          
          <div>
            <button type="submit"className="my-4 mx-3 hover:bg-sky-300 hover:text-white py-3 px-6 rounded-full text-sky-800 border-2 border-sky-800">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
