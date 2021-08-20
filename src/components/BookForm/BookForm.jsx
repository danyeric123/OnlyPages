import React, { useEffect,useState } from "react";


const BookForm = ({book,userProfile,handleAddBook,handleRemove}) => {
  const [formData, setFormData] = useState({
    api_id: book.id,
    title: book.title,
    coverImage: book.imageLinks?.thumbnail, //will need to be sized consistently
    authors: book.authors,
    publish: book.publishedDate,
    categories: book.categories,
  })
  let initialCollection = ["read","currentlyReading","wantToRead"]
  const [collections, setCollections] = useState(initialCollection)
  const [selectedCollection, setSelectedCollection] = useState('')

  useEffect(() => {
    const collections = ["read","currentlyReading","wantToRead"]
    const updatedList = collections.filter(collection=>userProfile[collection].every(book=>book?.api_id !== formData.api_id))
    setCollections(updatedList)
    setSelectedCollection(updatedList[0])
  }, [userProfile])
  
  const handleSelect=(e)=>{
    e.preventDefault();
    setSelectedCollection(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    handleAddBook(formData, selectedCollection);
  };

  return (
    <>
      <select onChange={handleSelect} className="border border-blue-500 my-1 group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md">
        {collections.map((collection,idx)=>{
            return (
              <option key={idx} value={collection}>{collection.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}</option>
            )
        })}
        </select>
        <button 
          onClick={handleClick} 
          className="group my-3 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
        >
          ADD BOOK TO COLLECTION
          </button>
         {collections.length<3&&<button 
            onClick={()=> handleRemove(book.id)}
            className="p-2 mb-12 w-full border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-500"
          >
          Remove Book
          </button>}
        
      </>
  )
}

export default BookForm

