/**
 * See the NOTICE file distributed with this work for additional information
 * regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {Typography} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import MainBreadcrumb from "../../../generic/MainBreadcrumb";
import ApisDocsMenu from "../ApisDocsMenu";
import CssBaseline from "@mui/material/CssBaseline";
import ExampleClientsTabs from "./ExampleClientsTabs";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-30px',
        display: 'flex',
    },
    item: {
        listStyleType: 'none',
    },
    table: {
        minWidth: 650,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    codeBlock: {
        display: 'block',
        borderRadius: '5px',
        padding: '10px',
        background: '#eeeeee',
        overflowX: 'scroll',
        minWidth: '100px',
    }
}));

const LoginWfDocs = () => {
    const classes = useStyles();

    const exampleClientsCode = [
        {
            tabTitle: `Perl`,
            tabContent: `use strict;
use warnings;

use JSON;
use HTTP::Request::Common;
use LWP::UserAgent; # install LWP::Protocol::https as well

my $ua = LWP::UserAgent->new(ssl_opts => { verify_hostname => 0 });
my $payload = ['username' => 'exampleuser', 'password' => 'examplepass'];

my $request = POST('https://www.trackhubregistry.org/api/login', $payload);

my $response = $ua->request($request);
my $auth_token;
if ($response->is_success) {
  $auth_token = from_json($response->content)->{auth_token};
  print "Logged in [", $auth_token, "]\\n" if $auth_token;
} else {
  die sprintf "Couldn't login, reason: %s [%d] ", $response->content, $response->code;
}
`,
        },
        {
            tabTitle: `Python2`,
            tabContent: `import requests, sys

url = "https://www.trackhubregistry.org/api/login"
payload = {"username": "your_username", "password": "your_password"}

response = requests.post(url, data=payload)
if not response.ok:
    print "Couldn't login, reason: %s [%d]" % (response.text, response.status_code) 
    sys.exit()

auth_token = response.json()[u'auth_token']
print 'Logged in [%s]' % auth_token`,
        },
        {
            tabTitle: `Python3`,
            tabContent: `import requests, sys

url = "https://www.trackhubregistry.org/api/login"
payload = {"username": "your_username", "password": "your_password"}

response = requests.post(url, data=payload)
if not response.ok:
    print("Couldn't login, reason: %s [%d]" % (response.text, response.status_code))
    sys.exit()

auth_token = response.json()[u'auth_token']
print('Logged in [%s]' % auth_token)`,
        },
        {
            tabTitle: `Ruby`,
            tabContent: `require 'net/https'
require 'uri'
 
server='https://www/trackhubregistry.org'
path = '/api/login'
 
url = URI.parse(server)
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(path)
request.set_form_data('username' => 'exampleuser', 'password' => 'examplepass')
response = http.request(request)
 
if response.code != "200"
  puts "Invalid response: #{response.code}"
  puts response.body
  exit
end

require 'rubygems'
require 'json'
 
result = JSON.parse(response.body)
puts "Logged in [#{result["auth_token"]}]"`,
        },
        {
            tabTitle: `Curl`,
            tabContent: `curl -X POST https://www.trackhubregistry.org/api/login \\
  --header 'Content-Type: multipart/form-data' \\
  --form username=exampleuser \\
  --form password=examplepass      

Another method:

curl -X POST https://www.trackhubregistry.org/api/login \\
     -H "Content-Type: application/json"  \\
     -d "{\\"username\\": \\"exampleuser\\", \\"password\\": \\"examplepass\\"}"`,
        },
    ]


    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <ApisDocsMenu/>
                <main className={classes.content}>
                    <MainBreadcrumb item="Registration"/>
                    <br/>
                    <Typography id="top" component="h1" variant="h4">
                        A Simplified RESTful workflow
                    </Typography>

                    <br/>
                    <Typography id="login" component="h4" variant="h5">
                        Logging in
                    </Typography>
                    <p>
                        All requests to the service require access tokens, so the first step in any RESTful workflow is
                        to obtain an authentication token. You can acquire an access token by programatically logging
                        in.
                    </p>

                    <Typography component="h4" variant="h6">
                        Procedure
                    </Typography>
                    <p>
                        <ol>
                            <li>Make a GET request to the <a
                                href="/docs/api/registration/reference#login">/api/login</a> endpoint
                                that includes an Authorization header with your username and password in a MIME Base64
                                encoding;
                            </li>
                            <li>Examine the response. The response code indicates whether the request succeeded, or how
                                it failed;
                            </li>
                            <li>A successful login request returns an authentication token that you can use in
                                subsequent requests.
                            </li>
                        </ol>
                    </p>

                    <Typography component="h4" variant="h6">
                        Example: Login request and response
                    </Typography>
                    <p>
                        A request to create a login session must supply the user's credentials in the following form:
                        <pre className={classes.codeBlock}>user:password</pre>
                        <ul>
                            <li>
                                <em>user</em> is the user's login name
                            </li>
                            <li>
                                <em>password</em> is the user's password
                            </li>
                        </ul>
                        These credentials must be supplied in a MIME Base64 encoding with an Authorization header, as
                        specified in RFC 1421.
                    </p>

                    <p>
                        This example shows a login request and response for a user named <em>exampleuser</em> with
                        password <em>examplepassword</em>.<br/>
                        Request:
                        <pre className={classes.codeBlock}>
                        {
                            `POST https://www.trackhubregistry.org/api/login
Authorization: Basic ZXhhbXBsZXVzZXI6ZXhhbXBsZXBhc3N3b3Jk`
                        }
                        </pre>

                        Response:
                        <pre className={classes.codeBlock}>
                        {
                            `200 OK
Content-type: application/json; charset=utf-8
...
{
  "auth_token": "52d07632507e6c17f4dca1a2c6b76fb146078c2e",
  "email": "user@email.com",
  "is_account_activated": true
}`
                        }
                        </pre>
                    </p>

                    <p>
                        The response code indicates whether the request succeeded, or how it failed.
                        <ul>
                            <li>
                                If the request is successful, the server returns HTTP response code 200 (OK). The
                                response body is a JSON object with a single key (
                                <em>auth_token</em>
                                ), whose value is the access token. <u>This token must be included as
                                an <em>Auth-Token</em> header in all subsequent requests</u>.
                            </li>
                            <li>If the credentials supplied in the authentication header are invalid, the server returns
                                HTTP response code 401.
                            </li>
                        </ul>
                    </p>

                    <Typography component="h4" variant="h6">
                        Example Clients
                    </Typography>
                    <br/>

                    <ExampleClientsTabs exampleClientsCode={exampleClientsCode}/>

                </main>
            </div>
        </>
    );
};


export default LoginWfDocs;