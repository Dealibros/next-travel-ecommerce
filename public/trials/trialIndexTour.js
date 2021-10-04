import { css } from '@emotion/react';
import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import { userInfo } from 'os';
import Layout from '../../components/Layout';

// import pic1 from '../../public/images/97.jpg';

const background = css`
  background-color: rgba(145, 111, 111, 0.1);
  padding: -1rem 3rem 0 3rem;
`;
const container = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px 250px;
  margin-top: 6.2rem;
`;
const containerItem = css`
  height: 350px;
  width: 330px;
  border-radius: 7px 7px 0 0;
  margin: -10px 20px 40px 0;
  margin-bottom: 9rem;

  img {
    border-radius: 20px 20px 0px 0px;
    margin-bottom: -20px;
    width: 350px;
  }
`;

const item = css`
  transition: 0.3s;
  transition-timing-function: ease-out;
  margin-bottom: 2rem;

  :hover {
    border-radius: 10px;
    box-shadow: 0px 0px 70px 8px rgba(0, 0, 0, 0.04);
    transform: scale(1.08);
  }
`;
const itemInfo = css`
  text-align: center;
`;

const tourName = css`
  margin: 1.7rem 0 0 0;
`;

const tourDestination = css`
  font-family: 'New Tegomin';
  margin: 0 0 0 0;
`;
const fontPrice = css`
  margin: 0.5rem 0 1rem 0;
  opacity: 0.8;
  font-size: 95%;
  font-family: 'New Tegomin';
`;

const a = css`
  :link {
    color: green;
  }
`;

function Tours(props) {
  return (
    <div>
      <Layout>
        <Head>
          <title>Tours Ecommerce</title>
        </Head>
        <section>
          <div css={container}>
            {props.tours.map((tour) => {
              //    <li key={`tour-li-${tour.id}`}>
              //      {tour.name}:
              // <Link href={`/tours/${tour.id}`}>
              // <a>{tour.name} Page</a>
              // </Link>
              // </li>

              return (
                <div css={background} key={tour}>
                  <div css={item} key={`tour-li-${tour.id}`}>
                    <Link href={`/tours/${tour.id}`}>
                      <a css={a}>
                        <div css={containerItem}>
                          <img
                            src={tour.img}
                            alt="Logo"
                            width="350"
                            height="360"
                          />
                          <div css={itemInfo}>
                            <h4 css={tourName}>{tour.name}</h4>
                            <h5 css={tourDestination}>{tour.destination}</h5>
                            <p css={fontPrice}>{tour.price}€</p>
                          </div>
                        </div>
                      </a>
                      {/* <div>{tour.following ? '❤️' : '🖤'}</div> */}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* <h1>Tours Page</h1>
     <div>Tours</div>
     <img src="/images/97.jpg" alt="tour1"/>

     <Image src={pic1} alt="tour2"/> */}
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { tours } = await import('../../util/database');

  // console.log(context.req.cookies);

  // const users = await getUsers();

  // const cookies = context.req.cookies.following || '[]';
  // const following = JSON.parse(cookies);

  // console.log(following);
  // // [5,7]
  // // [{id: 5, clapCount:13}, {id: 7, clapCount:0} ]
  // console.log(users);

  // const glorifiedUsers = users.map((user) => {
  //   const isTheUserFollowed = following.some((userCookieObj /* object */) => {
  //     return Number(user.id) === userCookieObj.id;
  //   });

  //   const userObj = following.find((cookieObj) => {
  //     return cookieObj.id === Number(user.id);
  //   });

  //   return {
  //     ...user,
  //     following: isTheUserFollowed,
  //     clap: isTheUserFollowed ? userObj.clapCount : 0,
  //   };
  // });

  // { id: '4', name: 'Ines', favoriteColor: 'yellow', following: true }
  // { id: '4', name: 'Ines', favoriteColor: 'yellow', following: false, clap: 0 }

  // { id: '5', name: 'Lucas', favoriteColor: 'yellow', following: true }
  // { id: '5', name: 'Lucas', favoriteColor: 'yellow', following: true, clap: 13 }

  // console.log(glorifiedUsers);

  // console.log(tours);
  return {
    props: {
      tours,
    },
  };
}

export default Tours;
