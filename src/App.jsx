import React from 'react'

import AppStyles from './styles/components/App.scss'

class App extends React.Component {
  render() {
    return (
      <div id={AppStyles['app']}>
        <header id={AppStyles['header']}>
          <h1>Simple Contest</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Candidates</a>
              </li>
              <li>
                <a href="#">Vote</a>
              </li>
              <li>
                <a href="#">Winners</a>
              </li>
            </ul>
          </nav>
        </header>
        <div id={AppStyles['content']}>
          <h1>Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac
            auctor augue mauris augue neque. Id semper risus in hendrerit
            gravida rutrum. Sed vulputate odio ut enim blandit volutpat maecenas
            volutpat blandit. Facilisi cras fermentum odio eu feugiat pretium
            nibh ipsum consequat. Donec adipiscing tristique risus nec feugiat
            in fermentum posuere. Ipsum a arcu cursus vitae congue mauris
            rhoncus. Amet dictum sit amet justo donec. Sit amet luctus venenatis
            lectus magna fringilla urna. Proin sed libero enim sed faucibus
            turpis. Quam id leo in vitae turpis massa sed elementum tempus. Ac
            felis donec et odio. Mauris cursus mattis molestie a.
          </p>
          <p>
            Amet aliquam id diam maecenas ultricies mi eget mauris. Enim
            lobortis scelerisque fermentum dui faucibus in ornare quam. Nibh
            mauris cursus mattis molestie a iaculis at erat. Vitae justo eget
            magna fermentum iaculis eu non diam phasellus. Bibendum neque
            egestas congue quisque. Suspendisse interdum consectetur libero id
            faucibus nisl tincidunt eget nullam. Adipiscing commodo elit at
            imperdiet. Habitasse platea dictumst quisque sagittis purus sit amet
            volutpat. Posuere urna nec tincidunt praesent semper feugiat nibh
            sed pulvinar. Urna condimentum mattis pellentesque id nibh. Hac
            habitasse platea dictumst vestibulum rhoncus est.
          </p>
          <p>
            Sed adipiscing diam donec adipiscing tristique risus nec feugiat in.
            Nibh venenatis cras sed felis eget velit. Et leo duis ut diam quam.
            Justo nec ultrices dui sapien. Aenean sed adipiscing diam donec
            adipiscing tristique. Donec ultrices tincidunt arcu non sodales
            neque sodales ut etiam. At urna condimentum mattis pellentesque.
            Blandit libero volutpat sed cras ornare arcu dui vivamus arcu.
            Porttitor rhoncus dolor purus non enim praesent elementum. Dictumst
            quisque sagittis purus sit. At urna condimentum mattis pellentesque
            id nibh tortor id aliquet.
          </p>
        </div>
        <footer id={AppStyles['footer']}>
          <p>Simple Contest</p>
          <nav>
            <ul>
              <li>
                By <a href="https://mfcl.io">Marc-François Cochaux-Laberge</a>
              </li>
              <li>
                <a href="https://github.com/mfcochauxlaberge/simple-contest-client">
                  Source code
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}

export default App
