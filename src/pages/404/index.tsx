import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as S from './style'

const NotFound404: React.FC = () => {
  return (
    <S.Container>
      <S.box>
      <Link href="/" >
        <S.Button>
            Voltar para Home
        </S.Button>
      </Link>
      </S.box>
      
    </S.Container>
  )
}

export default NotFound404;