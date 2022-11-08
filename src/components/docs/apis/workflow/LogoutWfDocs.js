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

const LogoutWfDocs = () => {
    const classes = useStyles();

    const exampleClientsCode = [
        {
            tabTitle: `Perl`,
            tabContent: `use strict;
use warnings;

use JSON;
use HTTP::Request::Common;
use LWP::UserAgent; # install LWP::Protocol::https as well

my $auth_token = 'exampletoken';
my $ua = LWP::UserAgent->new(ssl_opts => { verify_hostname => 0 });

my $request = POST('`+ window.location.origin +`/api/logout', 
  'Content-type' => 'multipart/form-data', 
  'Authorization' => "Token $auth_token"
);

my $response = $ua->request($request);
my $response_message;
if ($response->is_success) {
  print "Logged out successfully!\\n" if $response;
} else {
  die sprintf "Couldn't logout, reason: %s [%d] ", $response->content, $response->code;
}`,
        },
        {
            tabTitle: `Python2`,
            tabContent: `import requests, sys

auth_token = 'exampletoken'

headers = {
    'Authorization': 'Token ' + auth_token,
    'content-type': 'multipart/form-data',
}

r = requests.post('`+ window.location.origin +`/api/logout', headers=headers)
if not r.ok:
    print "Couldn't logout, reason: %s [%d]" % (r.text, r.status_code)
    sys.exit()
    
print 'Logged out'`,
        },
        {
            tabTitle: `Python3`,
            tabContent: `import requests, sys

auth_token = 'exampletoken'

headers = {
    'Authorization': 'Token ' + auth_token,
    'content-type': 'multipart/form-data',
}

r = requests.post('`+ window.location.origin +`/api/logout', headers=headers)
if not r.ok:
    print("Couldn't logout, reason: %s [%d]" % (r.text, r.status_code))
    sys.exit()

print('Logged out')`,
        },
        {
            tabTitle: `Ruby`,
            tabContent: `require 'net/https'
require 'uri'

require 'rubygems'
require 'json'

server='`+ window.location.origin +`'
path = '/api/logout'
auth_token = 'exampletoken'

url = URI.parse(server)
$http = Net::HTTP.new(url.host, url.port)
$http.use_ssl = true
$http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(path)
request["Authorization"] = "Token #{auth_token}"
request["content-type"] = "multipart/form-data"
response = $http.request(request)
 
if response.code != "200"
  puts "Invalid response: #{response.code}"
  puts response.body
  exit
end

puts 'Logged out'`,
        },
        {
            tabTitle: `Curl`,
            tabContent: `curl -X POST `+ window.location.origin +`/api/logout \\
  --header 'content-type: multipart/form-data' \\
  --header 'Authorization: Token exampletoken'`,
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
                    <Typography id="logout" component="h4" variant="h5">
                        Log out
                    </Typography>
                    <p>
                        When you want to terminate the client session, log out to delete the current access token.
                    </p>

                    <Typography component="h4" variant="h6">
                        Prerequisites
                    </Typography>
                    <p>Verify that you are logged in and have a valid access token.</p>

                    <Typography component="h4" variant="h6">
                        Procedure
                    </Typography>
                    <p>Make a request to the <a
                        href="/docs/api/registration/reference#logout">/api/logout</a> endpoint by
                        specifying your username (resp. access token) with
                        the <em>User</em> (resp. <em>Auth-Token</em>) header.
                    </p>

                    <Typography component="h4" variant="h6">
                        Example: logging out
                    </Typography>
                    <p>
                        This example deletes the current access token which logs the user out.<br/>
                        Request:
                        <pre className={classes.codeBlock}>
                            {
                                `      POST `+ window.location.origin +`/api/logout
      Authorization: Token 52d07632507e6c17f4dca1a2c6b76fb146078c2e`
                            }
                        </pre>

                        Response:
                        <pre className={classes.codeBlock}>
                            {
                                `      200 OK
      ...
      {
         "success": "Successfully logged out."
      }`
                            }
                        </pre>
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


export default LogoutWfDocs;