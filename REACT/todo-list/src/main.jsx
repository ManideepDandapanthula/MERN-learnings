import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import LotteryTicket from './LotteryTicket'
import Ticket from './Ticket'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <LotteryTicket/>
  </StrictMode>,
)
