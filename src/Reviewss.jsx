import React, { useState, useEffect } from 'react';

function Reviewss() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(storedReviews);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, company, review };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setName('');
    setCompany('');
    setReview('');
  };

  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  return (
    <div className="Reviewss">
      {showReviews ? (
        <Reviews reviews={reviews} setShowReviews={setShowReviews} handleDelete={handleDelete}  />
      ) : (
        <ReviewForm
          name={name}
          setName={setName}
          company={company}
          setCompany={setCompany}
          review={review}
          setReview={setReview}
          handleSubmit={handleSubmit}
          setShowReviews={setShowReviews}
        />
      )}
    </div>
  );
}

const ReviewForm = ({ name, setName, company, setCompany, review, setReview, handleSubmit, setShowReviews }) => (
  <div className='flex flex-col'>
    <form onSubmit={handleSubmit}>
    <div className='flex justify-around'>
      <div className='p-5 font-["Jaldi"] text-[20px] text-white'><p>Full Name</p>
      <input 
        className='bg-[#323238] rounded-md h-8'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div className='p-5 font-["Jaldi"] text-[20px] text-white'><p>Company Name</p>
      <input
      className='bg-[#323238] rounded-md h-8'
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      </div>
     </div>
      <div className='pl-9 font-["Jaldi"] text-[20px] text-white'><p>Review</p>
      <textarea
        className='bg-[#323238] rounded-lg h-[300px] w-[525px]'
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <button className='rounded-[20px] border-[1px] border-[white] h-[40px] w-[140px] flex justify-center items-center text-white text-[20px] mt-6 transition-all ease duration-200 hover:bg-[#7443FF] hover:border-[#7443FF]' type="submit">Submit</button>
      </div>
    </form>
    <button className='text-[#131313]' onClick={() => setShowReviews(true)}>Read Reviews</button>
    
  </div>
);

const Reviews = ({ reviews,handleDelete, setShowReviews }) => (
  <div className='text-white p-4'>
    <h1 className='mb-6'>Reviews</h1>
    {reviews.length === 0 ? (
      <p>No reviews yet.</p>
    ) : (
      <ul>
        {reviews.map((rev, index) => (
          <li  key={index}>
            <div>
            <h2>{rev.name}</h2>
            <h3>{rev.company}</h3>
            <span className='flex flex-wrap'>{rev.review}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    )}
    <button className='rounded-[20px] border-[1px] border-[white] h-[40px] w-[140px] flex justify-center items-center text-white text-[20px] mt-6 transition-all ease duration-200 hover:bg-[#7443FF] hover:border-[#7443FF]' onClick={() => setShowReviews(false)}>Back</button>
  </div>
);

export default Reviewss;
