import { graphql, useStaticQuery } from 'gatsby';
import React from "react";

import Avatar from '../Avatar';
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
      query GatsbyBlogMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )

}

export default Profile;

