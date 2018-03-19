import React from "react"

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <div>
                    <strong><nav class="navbar navbar-default">
                        <a class="scrollable" rel="nofollow" href="#home">Home</a> |
              <a class="scrollable" rel="nofollow" href="#About me">About</a> |
             <a class="scrollable" rel="nofllow" href="#Portfolio">Portfolio</a> |
              <a class="scrollable" rel="nofollow" href="#contact">Contact</a>
                    </nav></strong>
                </div>
                <h1><em>Mary Mafa's Portfolio</em></h1>
                <div>
                    <p>


                        I'm mary Mafa from Diepsloot Ext:6 but originally from Limpopo(Tzaneen),22 years of age.
                         I'm a very humble person, extrovert and passionate about my future.
                         I love programming with my heart and I thank myself for the hardworking I went through on my freecodecamp.
                         Now I'm building something interesting.I hate laziness because been lazy will not extend my life but decrease it.
                         I love reading like there is this quote says don't read success stories you will get the only message but read-only failure stories you will get ideas to get success.
</p>
                </div>

            </div>

        )
    }

}
export default Portfolio;