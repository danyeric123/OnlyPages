import React, { useEffect,useState } from "react";


const BookForm = ({book,userProfile,handleAddBook}) => {
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
      <select onChange={handleSelect} className="border border-black my-1">
        {collections.map((collection,idx)=>{
            return (
              <option key={idx} value={collection}>{collection.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}</option>
            )
        })}
        </select>
        <button onClick={handleClick} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" >ADD BOOK TO COLLECTION</button>
         <br />
        <br />
        
      </>
  )
}

export default BookForm

