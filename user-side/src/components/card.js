import React from 'react'

class Card extends React.Component{
    constructor(){
        super()

        this.state = {
            content: ''
        }

    }
    
    componentDidMount(){
        this.setState({
            content: this.props.berita.content.slice(0,100)
        })
    }

    render(){
        return (
            <>
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="bg-white p-6 rounded-lg">
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src={this.props.berita.imgUrl} alt="Image Size 720x400" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{this.props.berita.slug}</h3>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{this.props.berita.title}</h2>
                        <p class="leading-relaxed text-base">{this.state.content}...</p>
                        <div className="flex flex-row-reverse">
                            <button className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-400">Read More</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Card