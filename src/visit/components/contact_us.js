import React from 'react';
import styled from 'styled-components';

export const Contact = ({ data }) => {
  return (
    <Section>
        <Wrapper>     
            <Title>{data.markdownRemark.frontmatter.title}</Title>
            <Address dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
            <ContactUs href='mailto: kgauto@verizon.net' target='_blank'>kgauto@verizon.net</ContactUs>
            <ContactUs href='tel:+1-978-975-3882'>(978) 975-3882</ContactUs>
        </Wrapper>
        <Wrapper>
                <Form name="contact" method="POST" data-netlify="true">
            <FormShadow>
                    <Input type="text" name="name"  placeholder='Name'/>  
                    <Input type="email" name="email"  placeholder='Email'/>
                    <TextArea name="message" placeholder='Message'></TextArea>
                    <Button type="submit">Send</Button>
            </FormShadow>
                </Form>
        </Wrapper>
    </Section>
  )
}

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 4rem 0.5rem;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        flex-basis: 100%;
    }
`;

const Title = styled.h1`
    font-size: 2.25rem;
    line-height: 1.5;
    color: #333;
    font-weight: 500;
`;

const Address = styled.div`
    font-size: 1.75rem;
    line-height: 1.5;
    text-align: center;
    p {
        margin: 0;
    }

    @media (max-width: 900px) {
        font-size: 1rem;
    }
`;

const ContactUs = styled.a`
    font-size: 1.75rem;
    text-decoration: none;
    color: #333;
    line-height: 1.5;
    margin-top: 2rem;

    @media (max-width: 900px) {
        font-size: 1.25rem;
    }
`;

const FormShadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Form = styled.form`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 400px;

    @media (max-width: 900px) {
        margin-top: 4rem;
    }

    -webkit-box-shadow: 169px 46px 0px 90px rgba(205,205,205,1);
    -moz-box-shadow: 169px 46px 0px 90px rgba(205,205,205,1);
    box-shadow: 169px 46px 0px 90px rgba(205,205,205,1);

    @media (max-width: 960px) {
      -webkit-box-shadow: none;
      -mox-box-shadow: none;
      box-shadow: none;
    }
`;

const Input = styled.input`
    margin: 1rem 0;
    height: 40px;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid lightgray;
`;

const TextArea = styled.textarea`
    margin: 1rem 0;
    height: 80px;
    width: 100%;
    min-width: 320px;
    resize: none;
    padding: 0.5rem;
    border: 1px solid lightgray;
`;

const Button = styled.button`
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #081C38;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover, focus {
        background: #0053ba;
    }
    &:focus {
        outline: 1px solid #fff;
        outline-offset: -4px;
    }

    &:active {
        transform: scale(0.99);
    }
`;
