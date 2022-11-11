import { useRouter } from 'next/router';
import React from 'react';


function Project() {

  const router = useRouter()
  const portifolioId = router.query.portifolioId

  return (
    <h1>route </h1>
  )
}

export default Project;