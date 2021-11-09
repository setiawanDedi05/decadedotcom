import React from "react"
import Card from "./components/card"
class App extends React.Component{S
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
    return (
      <>
        <div className="mx-24 pt-20">
          <h1 className="text-7xl font-bold">Decade.Com</h1>
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-blue-400 mx-24 p-2">
          {this.state.category.map((value)=> {
            return (
                  <button className="mx-2 text-white hover:text-yellow-400">{value.name}</button>
              )
          })}
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-2 mx-auto max-w-7x1">
            <div class="flex flex-wrap w-full mb-4 p-4">
              <div class="w-full mb-6 lg:mb-0">
                <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">News</h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
                {
                  this.state.news.map((value) => {
                    return <Card key={value.id} berita={value} />
                  })
                }
            </div>
          </div>
        </section>
      </>
    )
  }

}

export default App