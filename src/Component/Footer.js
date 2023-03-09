import React from "react";
import { Container, Button } from "react-bootstrap";



function Footer() {
  return (
  <footer className='text-center text-white bg-dark position-fixed bottom-0 col-12' >
    <Container className='pt-4'>
      <section className='mb-4'>
        <Button
          size="lg"
          className='text-light m-1 bg-dark border border-dark'
          href='/'
          role='button'
        >
          <i className='fab fa-facebook-f' ></i>
        </Button>

        <Button
         
          size="lg"
          className='text-light m-1 bg-dark border border-dark'
          href='/'
          role='button'
        >
          <i className='fab fa-twitter' ></i>
        </Button>

        <Button

          size="lg"
          className='text-light m-1 bg-dark border border-dark'
          href='/'
          role='button'
        >
          <i className='fab fa-google' ></i>
        </Button>

        <Button
          
      
          size="lg"
          className='text-light m-1 bg-dark border border-dark'
          href='/'
          role='button'
        >
          <i className='fab fa-instagram' ></i>
        </Button>

        <Button
          
        
          size="lg"
          className='text-light m-1 bg-dark border border-dark'
          href='/'
          role='button'
        >
          <i className='fab fa-linkedin' />
        </Button>

        <Button
          
          size="lg"
          className='text-light m-1 bg-dark border border-dark'
          href='/'
          role='button'
        >
          <i className='fab fa-github' />
        </Button>
      </section>
    </Container>

    <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2020 Copyright:&nbsp;
      <a className='text-light' target={"_blank"} rel="noreferrer" href='https://soufiane-korchi-portfolio.netlify.app/'>
         Soufiane.com
      </a>
    </div>
  </footer>

  );
}

export default Footer;
