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
import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MainBreadcrumb from "../../../MainBreadcrumb";
import ApisDocsMenu from "../ApisDocsMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
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
use LWP::UserAgent;

my $ua = LWP::UserAgent->new(ssl_opts => { verify_hostname => 0 });
my $server = 'https://www.trackhubregistry.org';
my ($user, $pass, $auth_token) = ('exampleuser', 'examplepass');

$auth_token = login($server, $user, $pass);

my $request = GET("$server/api/logout");
$request->headers->header(user       => $user);
$request->headers->header(auth_token => $auth_token);`,
        },
        {
            tabTitle: `Python2`,
            tabContent: `import requests, sys

server = 'https://www.trackhubregistry.org'
user = 'exampleuser'
password = 'examplepass'

def login(server, user, password):
    r = requests.get(server+'/api/login', auth=(user, password), verify=False)
    if not r.ok:
        print "Couldn't login, reason: %s [%d]" % (r.text, r.status_code)
        sys.exit

    auth_token = r.json()[u'auth_token']
    print 'Logged in [%s]' % auth_token
    return auth_token

auth_token = login(server, user, password)
r = requests.get(server+'/api/logout', headers={ 'user': user, 'auth_token': auth_token })
if not r.ok:
    print "Couldn't logout, reason: %s [%d]" % (r.text, r.status_code)
    sys.exit
print 'Logged out'`,
        },
        {
            tabTitle: `Python3`,
            tabContent: `import requests, sys

server = 'https://www.trackhubregistry.org'
user = 'exampleuser'
password = 'examplepass'

def login(server, user, password):
    r = requests.get(server+'/api/login', auth=(user, password), verify=True)
    if not r.ok:
        print("Couldn't login, reason: %s [%d]" % (r.text, r.status_code))
        sys.exit

    auth_token = r.json()[u'auth_token']
    print('Logged in [%s]' % auth_token)
    return auth_token

auth_token = login(server, user, password)
r = requests.get(server+'/api/logout', headers={ 'user': user, 'auth_token': auth_token })
if not r.ok:
    print("Couldn't logout, reason: %s [%d]" % (r.text, r.status_code))
    sys.exit
print('Logged out')`,
        },
        {
            tabTitle: `Ruby`,
            tabContent: `require 'net/https'
require 'uri'

require 'rubygems'
require 'json'

def login(user, pass)
  request = Net::HTTP::Get.new('/api/login')
  request.basic_auth(user, pass)
  response = $http.request(request)
  
  if response.code != "200"
    puts "Couldn't login, reason: #{response.body} [#{response.code}]"
    exit
  end

  result = JSON.parse(response.body)
  puts "Logged in [#{result["auth_token"]}]"
  
  return result["auth_token"]
end

server = 'https://www.trackhubregistry.org'
user = 'exampleuser'
pass = 'examplepass'

url = URI.parse(server)
$http = Net::HTTP.new(url.host, url.port)
$http.use_ssl = true
$http.verify_mode = OpenSSL::SSL::VERIFY_NONE

auth_token = login(user, pass)

request = Net::HTTP::Get.new('/api/logout')
request["User"] = user
request["Auth-Token"] = auth_token
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
            tabContent: `curl -X DELETE "https://www.trackhubregistry.org/api/logout" \\
     -H "User: exampleuser" \\
     -H "Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi"`,
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
                                `      GET https://www.trackhubregistry.org/api/logout
      User: exampleuser
      Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi`
                            }
                        </pre>

                        Response:
                        <pre className={classes.codeBlock}>
                            {
                                `      200 OK
      ...
      { "message": "Successfully logged out" }`
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