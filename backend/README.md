# Installation / Running Locally

Copy `template.env` to `.env` in the root directory of this repo, appending the path of each SSL key to the corresponding `SSL_PRIVATE_KEY` and `SSL_CERT` variables:

```bash
SSL_PRIVATE_KEY=<path/to/your/private_key> # ex: 'sslcert/private.key.pem'
SSL_CERT=<path/to/your/domain_key> # ex: 'sslcert/domain.cert.pem'
```
