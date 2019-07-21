import React from 'react'

const Footer = props => (
  <footer>
    <hr/>
    <div className="row footer-block">
      <div className="col-12 col-md-6 logo-ft">
        <img src="/static/logo.svg" alt="footer logo"/>
      </div>
      <div className="col-12 col-md-4 contact-ft">
        <a className="contact-btn" href="mailto:hi.oncecaptured@gmail.com?subject=Hello,&nbsp;ONCE!&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date)." target="_self">Contact Us</a>
      </div>
      <div className="col-12 col-md-2 social-ft">
        <ul>
          <li>
            <a href="http://facebook.com/oncecaptured.co">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0C5.60553 0 0 5.60553 0 12.5C0 19.3945 5.60553 25 12.5 25C19.3945 25 25 19.3945 25 12.5C25 5.60553 19.3945 0 12.5 0ZM15.6082 12.9364H13.5741C13.5741 16.1856 13.5741 20.1866 13.5741 20.1866H10.5599C10.5599 20.1866 10.5599 16.2258 10.5599 12.9364H9.12997V10.3786H10.5599V8.72045C10.5599 7.53222 11.1238 5.67937 13.601 5.67937L15.8365 5.68609V8.17669C15.8365 8.17669 14.4804 8.17669 14.2186 8.17669C13.9568 8.17669 13.5808 8.31096 13.5808 8.87486V10.3786H15.8767L15.6082 12.9364Z" fill="#F2ECDC"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="http://instagram.com/_oncecaptured/">
              <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6786 15.0055C14.059 15.0055 15.184 13.8805 15.184 12.5055C15.184 11.962 15.0047 11.4566 14.7112 11.0435C14.2547 10.4131 13.5156 10 12.6786 10C11.8417 10 11.1025 10.4131 10.6514 11.0435C10.3525 11.4566 10.1786 11.9566 10.1786 12.5C10.1732 13.8805 11.2982 15.0055 12.6786 15.0055Z" fill="#F2ECDC"/>
                <path d="M18.1406 9.44042V7.03281H17.8309L15.733 7.03824L15.7385 9.44585L18.1406 9.44042Z" fill="#F2ECDC"/>
                <path d="M12.6786 0C5.78185 0 0.178589 5.6087 0.178589 12.5C0.178589 19.3913 5.78728 25 12.6786 25C19.5699 25 25.1786 19.3913 25.1786 12.5C25.1786 5.6087 19.5699 0 12.6786 0ZM19.7873 11.0435V16.8641C19.7873 18.3804 18.5536 19.6141 17.0427 19.6141H8.31446C6.80359 19.6141 5.56989 18.3804 5.56989 16.8641V8.1413C5.56989 6.625 6.80359 5.3913 8.31446 5.3913H17.0373C18.5482 5.3913 19.7818 6.625 19.7818 8.1413V11.0435H19.7873Z" fill="#F2ECDC"/>
                <path d="M16.5645 12.5001C16.5645 14.6414 14.8199 16.3859 12.6786 16.3859C10.5319 16.3859 8.7873 14.6414 8.7873 12.5001C8.7873 11.9838 8.89056 11.4892 9.07534 11.0381H6.95578V16.8588C6.95578 17.6088 7.56448 18.2229 8.31448 18.2229H17.0373C17.7873 18.2229 18.4014 17.6142 18.4014 16.8588V11.0436H16.2764C16.4612 11.4946 16.5645 11.9838 16.5645 12.5001Z" fill="#F2ECDC"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="http://vimeo.com/oncecaptured">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4997 0C5.59663 0 0 5.59663 0 12.4997C0 19.4027 5.59663 25 12.4997 25C19.4027 25 25 19.4034 25 12.4997C25 5.59532 19.4034 0 12.4997 0ZM19.9251 9.0983C19.0861 13.8205 14.4032 17.819 12.9952 18.7315C11.5859 19.6439 10.3018 18.3657 9.83442 17.3969C9.30216 16.297 7.7034 10.3156 7.28454 9.82066C6.86567 9.3251 5.60974 10.3162 5.60974 10.3162L5.00013 9.51782C5.00013 9.51782 7.55198 6.47238 9.49225 6.08957C11.5499 5.68512 11.5472 9.25037 12.0421 11.2287C12.522 13.1427 12.8418 14.2361 13.2607 14.2361C13.6796 14.2361 14.4812 13.1709 15.3544 11.5348C16.2327 9.89735 15.317 8.45001 13.6029 9.47849C14.2905 5.36721 20.7629 4.37806 19.9251 9.0983Z" fill="#F2ECDC"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
    <script src="https://player.vimeo.com/api/player.js"></script>
  </footer>
)

export default Footer
