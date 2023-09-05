import { Routes, Route } from 'react-router-dom'
import { History, Home } from './pages'
import { DefaultLayout } from './layouts'

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}
      >
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/history"
          element={<History />}
        />
      </Route>
    </Routes>
  )
}
