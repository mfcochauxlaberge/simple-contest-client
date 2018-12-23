import React from 'react'

import CandidateCardStyles from '../styles/components/CandidateCard.scss'

class CandidateCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        key={this.props.candidate.id}
        className={CandidateCardStyles['candidate_card']}
      >
        <img
          src={this.props.candidate.image}
          alt={
            this.props.candidate.name + ' ' + this.props.candidate.description
          }
        />
        <div className={CandidateCardStyles['candidate_info']}>
          <div>
            <b>{this.props.candidate.author}</b>
          </div>
          <div>
            <i>{this.props.candidate.description}</i>
          </div>
        </div>
      </div>
    )
  }
}

export default CandidateCard
