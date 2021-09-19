import React, { useState } from "react"
import styled from "styled-components"
import { Formik, Field, Form } from "formik"
import axios from "axios"
import Text from "../atoms/Text"
import ReCAPTCHA from "react-google-recaptcha"

const FormContainer = styled.div`
  & > * {
    font-family: ${({ theme }) => theme.fontFamily};
  }
  input,
  select,
  textarea {
    border: none;
    border-bottom: 2px solid #e2e2e2;
    background: transparent;
    outline: none;
    padding: 10px 10px;
    font-size: ${({ theme }) => theme.bodyS};
    margin-bottom: 50px;
    font-family: ${({ theme }) => theme.fontFamily};
  }
  form {
    display: flex;
    flex-direction: column;

    .submit_btn {
      margin-top: 30px;
      width: 160px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      outline: none;
      background-color: ${({ theme }) => theme.red};
      border: none;
      border-radius: 20px 0px;
      cursor: pointer;
      transition: all 0.4s ease-out;
      text-decoration: none;
      font-family: ${({ theme }) => theme.fontFamily};
      font-weight: ${({ theme }) => theme.black};
      font-size: ${({ theme }) => theme.bodyDesktop};
      color: #fff;
      text-transform: uppercase;

      &:hover {
        background-color: #fff;
        border: 1px solid ${({ theme }) => theme.dark};
        color: ${({ theme }) => theme.dark};
      }
      @media (min-width: 1200px) {
        align-self: flex-start;
      }
    }

    textarea {
      width: 100%;
      font-family: ${({ theme }) => theme.fontFamily};
    }
  }
`

const LastLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  @media (min-width: 1400px) {
    flex-direction: row;
    align-items: center;
  }
  label,
  button {
    width: 100%;
    @media (min-width: 768px) {
      width: 45%;
    }
  }
  label {
    position: relative;
    padding-left: 20px;
    margin-bottom: 50px;
    font-size: ${({ theme }) => theme.bodyXS};

    @media (min-width: 1400px) {
      margin-bottom: 0;
    }
    input {
      position: absolute;
      top: 2%;
      left: 0;
    }
  }
`

const RequiredInfo = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
`

const RequiredText = styled(Text)`
  font-size: ${({ theme }) => theme.bodyXS};
  margin: 0;
  color: ${({ theme }) => theme.dark};
`

const FormSubmitedInfo = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  bottom: 50px;
  left: 50%;
  width: 80%;
  max-width: 500px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, 20%);
  background: ${({ theme }) => theme.red};
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  z-index: 1080;
  &.formSubmitedInfo--open {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0%);
  }
`

const FormSubmitedInfoButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 20px 0px;
  color: #fff;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.bodyXS};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
`

const FormSubmitedInfoReCaptcha = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  bottom: 50px;
  left: 50%;
  width: 80%;
  max-width: 500px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, 20%);
  background: ${({ theme }) => theme.red};
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  z-index: 2000;
  &.formSubmitedInfo--open {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0%);
  }
`

const ErrorText = styled(Text)`
  font-size: ${({ theme }) => theme.bodyS};
  color: #fff;
  margin-bottom: 15px;
`

const ContactForm = () => {
  const [openErrorMsg, setOpenErrorMsg] = useState(false)
  const [isFormSubmited, setFormSubmited] = useState(false)
  const [isRecaptchaTrue, setRecaptchaTrue] = useState(false)

  const isReCAPTCHAVerifed = () => {
    setRecaptchaTrue(true)
  }

  const isReCAPTCHAExpired = () => {
    setRecaptchaTrue(false)
  }

  return (
    <FormContainer>
      <FormSubmitedInfo
        className={
          isFormSubmited ? "formSubmitedInfo--open" : "formSubmitedInfo"
        }
      >
        <ErrorText>Pomyślnie wysłano wiadomość</ErrorText>
        <FormSubmitedInfoButton onClick={() => setFormSubmited(false)}>
          Zamknij
        </FormSubmitedInfoButton>
      </FormSubmitedInfo>
      <FormSubmitedInfoReCaptcha
        className={openErrorMsg ? "formSubmitedInfo--open" : "formSubmitedInfo"}
      >
        <ErrorText>Wypełnij pole ReCAPTCHA!</ErrorText>
        <FormSubmitedInfoButton onClick={() => setOpenErrorMsg(false)}>
          Rozumiem
        </FormSubmitedInfoButton>
      </FormSubmitedInfoReCaptcha>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          phone: "",
          needs: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          if (!isRecaptchaTrue) {
            setOpenErrorMsg(true)
          } else {
            axios.defaults.headers.post["Content-Type"] = "application/json"
            axios
              .all([
                axios.post("https://formsubmit.co/ajax/krydegamer@gmail.com", {
                  name: values.firstName,
                  email: values.email,
                  phone: values.phone ? values.phone : "Nie podano",
                  message: values.message,
                }),
              ])
              .then(response => console.log("Wysłano email"))
              .catch(error => {
                alert(
                  "Wystąpił błąd. Wyślij wiadomość ręcznie za pomocą podanego emaila"
                )
                setFormSubmited(false)
              })
            actions.setSubmitting(false)
            setFormSubmited(true)
            setOpenErrorMsg(false)
          }
        }}
      >
        <Form>
          <Field
            id="firstName"
            name="firstName"
            placeholder="Imię i nazwisko*"
            required
          />
          <Field
            id="email"
            name="email"
            placeholder="E-mail*"
            type="email"
            required
          />
          <Field id="phone" name="phone" placeholder="Telefon" />
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="O co chciałbyś zapytać?*"
            required
          ></Field>

          <LastLine>
            <label htmlFor="agreement">
              <Field
                type="checkbox"
                as="input"
                id="agreement"
                name="agreement"
                required
              />
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
              ustawą o ochronie danych osobowych w związku z wysłaniem zapytania
              przez formularz kontaktowy. Podanie danych jest dobrowolne, ale
              niezbędne do przetworzenia zapytania
            </label>

            <ReCAPTCHA
              sitekey="6Ldk0W8cAAAAALMSUFtCxTzqhLn8DNqTRlJHGARC"
              onChange={isReCAPTCHAVerifed}
              onExpired={isReCAPTCHAExpired}
              render="onload"
            />
            <RequiredInfo>
              <RequiredText>Pola oznaczone * są wymagane</RequiredText>
            </RequiredInfo>
          </LastLine>
          <button type="submit" className="submit_btn">
            Wyślij
          </button>
        </Form>
      </Formik>
    </FormContainer>
  )
}

export default ContactForm
