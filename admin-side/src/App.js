import React from 'react'
import Navbar from './components/navbar'
import Card from './components/cardNews'
class App extends React.Component{
  constructor(){
    super()

    this.state = {
      news:[],
      category:[]
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/Post`)
      .then(res=>res.json())
      .then(result=>{
        this.setState({
          news:result
        })
      })

    fetch(`http://localhost:3000/Category`)
      .then(res=>res.json())
      .then(result=>{
        this.setState({
          category:result
        })
      })
  }

  render(){
    return(
      <>
        <div className="flex">
        <Navbar/>
        <div className="ml-10 mt-2 mb-5">
        <div className="heading text-center font-bold text-2xl mb-5 text-gray-800">New Post</div>
          <div className="editor mx-auto w-10/12 mb-5 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Title" type="text"/>
            <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Slug" type="text"/>
            <textarea className="description bg-gray-100 sec p-3 h-20 border border-gray-300 outline-none" placeholder="Image Url"></textarea>
            <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 my-5 outline-none" placeholder="Describe everything about this post here"></textarea>
            <div className="buttons flex">
              <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
              <button className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</button>
            </div>
          </div>
          {/* table */}
          <hr className="border-2 border-gray-100 my-5"/>
          <table className="table-auto">
            <thead className="justify-between">
              <tr className="bg-gray-800">
                <th className="px-16 py-2">
                  <span className="text-gray-300">Image</span>
                </th>
                <th className="px-16 py-2">
                  <span className="text-gray-300">Title</span>
                </th>
                <th className="px-16 py-2">
                  <span className="text-gray-300">Slug</span>
                </th>
                <th className="px-16 py-2">
                  <span className="text-gray-300">Content</span>
                </th>
                <th className="px-16 py-2" colSpan="2">
                  <span className="text-gray-300">Action</span>
                </th>

              </tr>
            </thead>
            <tbody className="bg-gray-200">
              {
                this.state.news.map((value) => {
                  return (
                    <Card key={value.id} berita={value}/>
                  )
                })
              }
              
            </tbody>
          </table>    
        </div>
        </div>
      </>
    )
  }
}

export default App