import React from 'react';
import styled from 'styled-components';
import { cellStyle, checkCategory } from '../../CheckBox/Section/Cell'

const ProgressBar = styled.div`
  position: relative;
  width: 30px;
  height: 150px;
  background: #d9d9d9;
  border-radius: 3px;
  margin: 0 auto 0.3rem;
`

const Current = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0;
  border-radius: 3px;
  transition: 0.3s;

  ${cellStyle}
`

function Analysis ({ cellData }) { 

  const getLength = (label) => {
    return cellData.filter(v => v === label).length;
  }


  return (
    <div>
      <ul  style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center'}}>
      {checkCategory.map(v => 
        <li>
          <span style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>{getLength(v.label)}</span>
          <ProgressBar>
            <Current state={v.label} style={{ height: getLength(v.label) / 30 * 150 + 'px' }}/>
          </ProgressBar>
          <em style={{ fontSize: '0.9rem', fontWeight: '500' }}>{v.label}</em>
        </li>
      )}
      </ul>    
    </div>
  )
}

export default Analysis;
