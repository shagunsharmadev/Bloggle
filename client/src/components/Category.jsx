import React from 'react'

const Category = () => {
    const categories = ['Programming','Data Science', 'Technology', 'Self Improvement', 'Writing', 'Relationships', 'Machine Learning', 'Productivity', 'Politics']
  return (
    <div className='h-[150px] flex flex-wrap gap-4 w-[500px] sticky top-[80px] bg-white'>
        <h2 className='font-bold mb-4'>Discover what matters to you</h2>
      {
        categories.map((category) => {
            return (
                <div className=''>
                    <span className='bg-gray-100 px-4 py-1.5 rounded-full text-sm'>{category}</span>
                </div>
            )
        })
      }
    </div>
  )
}

export default Category
