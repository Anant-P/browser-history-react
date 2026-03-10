import './index.css'
import {Component} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },
  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },
  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {userInp: '', historyList: initialHistoryList}

  onSearch = event => {
    this.setState({userInp: event.target.value})
  }

  deleteFun = id => {
    const {historyList} = this.state

    const newList = historyList.filter(eachItem => eachItem.id !== id)

    this.setState({historyList: newList})
  }

  render() {
    const {userInp, historyList} = this.state

    const filterList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(userInp.toLowerCase()),
    )

    const emptyHistory = () => (
      <p className="empty-para-container">There is no history to show</p>
    )

    return (
      <div>
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="header-logo-img"
          />

          <div className="search-box">
            <div className="search-icon-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>

            <input type="search" onChange={this.onSearch} />
          </div>
        </div>

        {filterList.length === 0 ? (
          emptyHistory()
        ) : (
          <ul>
            {filterList.map(eachItem => (
              <li key={eachItem.id} className="list-item">
                <div className="left-item">
                  <p>{eachItem.timeAccessed}</p>

                  <img
                    className="logo-img"
                    alt="domain logo"
                    src={eachItem.logoUrl}
                  />

                  <p>{eachItem.title}</p>

                  <p>{eachItem.domainUrl}</p>
                </div>

                <button
                  type="button"
                  data-testid="delete"
                  onClick={() => this.deleteFun(eachItem.id)}
                >
                  <img
                    className="del-logo-img"
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BrowserHistory
