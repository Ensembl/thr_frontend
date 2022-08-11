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

const RetrieveThWfDocs = () => {
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

my $request = GET("$server/api/trackhub");
$request->headers->header(user       => $user);
$request->headers->header(auth_token => $auth_token);
my $response = $ua->request($request);
if ($response->is_success) {
  use Data::Dumper;
  local $Data::Dumper::Terse = 1;
  local $Data::Dumper::Indent = 1;
  print "Registered track hubs\\n", Dumper from_json($response->content);
} else {
  die sprintf "Couldn't get list of registered trackhubs: %s [%d]", $response->content, $response->code;
} 

logout($server, $user, $auth_token);

sub login {
  my ($server, $user, $pass) = @_;

  my $request = GET("$server/api/login");
  $request->headers->authorization_basic($user, $pass);
  
  my $response = $ua->request($request);
  my $auth_token;
  if ($response->is_success) {
    $auth_token = from_json($response->content)->{auth_token};
    print "Logged in [$auth_token]\\n" if $auth_token;
  } else {
    die sprintf "Couldn't login: %s [%d]", $response->content, $response->code;
  }

  return $auth_token;
}

sub logout {
  my ($server, $user, $auth_token) = @_;

  my $request = GET("$server/api/logout");
  $request->headers->header(user       => $user);
  $request->headers->header(auth_token => $auth_token);

  my $response = $ua->request($request);
  if ($response->is_success) {
    print "Logged out\\n";
  } else {
    die sprintf "Unable to logout: %s [%d]", $response->content, $response->code;
  } 
}`,
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

def logout(server, user, auth_token):
    r = requests.get(server+'/api/logout', headers={ 'user': user, 'auth_token': auth_token })    
    if not r.ok:
       print "Couldn't logout, reason: %s [%d]" % (r.text, r.status_code)
       sys.exit
    print 'Logged out'

auth_token = login(server, user, password)
r = requests.get(server+'/api/trackhub', headers={ 'user': user, 'auth_token': auth_token }, verify=False)
if not r.ok:
   print "Couldn't get list of registred trackhubs, reason: %s [%d]" % (r.text, r.status_code)
   sys.exit
print repr(r.json())

logout(server, user, auth_token)`,
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

def logout(server, user, auth_token):
    r = requests.get(server+'/api/logout', headers={ 'user': user, 'auth_token': auth_token })    
    if not r.ok:
       print("Couldn't logout, reason: %s [%d]" % (r.text, r.status_code))
       sys.exit
    print('Logged out')

auth_token = login(server, user, password)
r = requests.get(server+'/api/trackhub', headers={ 'user': user, 'auth_token': auth_token }, verify=True)
if not r.ok:
   print("Couldn't get list of registred trackhubs, reason: %s [%d]" % (r.text, r.status_code))
   sys.exit
print(repr(r.json()))

logout(server, user, auth_token)`,
        },
        {
            tabTitle: `Ruby`,
            tabContent: `require 'net/https'
require 'uri'

require 'rubygems'
require 'json'

server = 'https://www.trackhubregistry.org'
user = 'exampleuser'
pass = 'examplepass'

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

def logout(user, auth_token)
  request = Net::HTTP::Get.new('/api/logout', { 'User' => user, 'Auth-Token' => auth_token })
  response = $http.request(request)
 
  if response.code != "200"
    puts "Invalid response: #{response.code}"
    puts response.body
    exit
  end

  puts 'Logged out'
end
      
url = URI.parse(server)
$http = Net::HTTP.new(url.host, url.port)
$http.use_ssl = true
$http.verify_mode = OpenSSL::SSL::VERIFY_NONE

auth_token = login(user, pass)

request = Net::HTTP::Get.new('/api/trackhub', { 'Content-Type' => 'application/json', 'User' => user, 'Auth-Token' => auth_token })
response = $http.request(request)
if response.code != "200"
  puts "Invalid response: #{response.code} #{response.body}"
  exit
end

puts response.body

logout(user, auth_token)`,
        },
        {
            tabTitle: `Curl`,
            tabContent: `curl -X GET "https://www.trackhubregistry.org/api/trackhub" \\
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
                    <Typography id="thlist" component="h4" variant="h5">
                        Retrieve the list of registered track hubs
                    </Typography>
                    <p>
                        Suppose you've already submitted some of your public track hubs. At some point, you want to know
                        which ones by retrieving the list of registered track hubs from the Registry, perhaps because
                        you want to update or delete some of them.
                    </p>
                    <p>
                        After logging in, your client can simply get the list of registered track hubs by making a
                        request to the <a href="/docs/api/registration/reference#get_trackhub">GET
                        /api/trackhub</a> endpoint. The response provides overview information on your registered track
                        hubs together with the URIs of their corresponding trackDb entities stored in the Registry.
                    </p>

                    <Typography component="h4" variant="h6">
                        Prerequisites
                    </Typography>
                    <p>
                        Verify that:
                        <ul>
                            <li>your client has successfully <a
                                href="/docs/api/registration/workflow/login">logged in</a> and have,
                                as such, obtained a valid authentication token;
                            </li>
                        </ul>
                    </p>

                    <Typography component="h4" variant="h6">
                        Procedure
                    </Typography>
                    <p>
                        <ol>
                            <li>Make a GET request to the <a
                                href="/docs/api/registration/reference#get_trackhub">/api/trackhub</a> endpoint
                                that includes a <em>User</em> header with your username, and
                                an <em>Auth-Token</em> header with the given authentication token;
                            </li>
                            <li>Examine the response. The response code indicates whether the request succeeded, or how
                                it failed;
                            </li>
                            <li>A successful request returns an array of JSON objects representing track hubs whose
                                trackDbs are registered by the user.
                            </li>
                        </ol>
                    </p>

                    <Typography component="h4" variant="h6">
                        Example: retrieve request and response
                    </Typography>
                    <p>
                        We start from the previous <a
                        href="/docs/api/registration/workflow/thregister">example</a>, where
                        user <em>exampleuser</em> submitted one track hub. The client now wants to programatically
                        retrieve a compact representation of the set of its registered track hubs.
                    </p>
                    <p>
                        As already explained, any request to the Registration API must supply the user's credentials
                        with the following headers:
                        <pre className={classes.codeBlock}>
                            {
                                `      User: [username]
      Auth-Token: [valid token]`
                            }
                        </pre>
                    </p>

                    <p>
                        The <a href="/docs/api/registration/reference#get_trackhub">GET
                        /api/trackhub</a> endpoint does not accept parameters, so the request in this case is very
                        simple:
                    </p>
                    <p>
                        Request:
                        <pre className={classes.codeBlock}>
                            {
                                `      GET https://www.trackhubregistry.org/api/trackhub
      User: exampleuser
      Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi`
                            }
                        </pre>
                    </p>
                    <p>
                        If the request is successful, the response body is an array of JSON objects, one for each track
                        hub submitted by the user:
                    </p>
                    <p>
                        Response:
                        <pre className={classes.codeBlock}>
                            {
                                `      200 OK
      Content-type: application/json; charset=utf-8
      ...
      [
        {
          'name': 'cshl2013',
          'shortLabel': 'Plants',
          'longLabel': 'CSHL Biology of Genomes meeting 2013 demonstration assembly hub',
          'url': 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt',
          'trackdbs': [
                            {
                              'species': '3988',
                              'assembly': 'GCA_000151685.2',
                              'uri': 'https://www.trackhubregistry.org/api/trackdb/KRBr5PS7RmapaFr7ofpTBA'
                            },
                            {
                              'species': '3711',
                              'assembly': 'GCA_000309985.1',
                              'uri': 'https://www.trackhubregistry.org/api/trackdb/FOEM87nETMOCOglmm0sSsg'
                            },
                            {
                              'species': '3702',
                              'assembly': 'GCA_000001735.1',
                              'uri': 'https://www.trackhubregistry.org/api/trackdb/hB8Npdm1ST2gBwkbQThkVg'
                            }
                        ]
        }
      ]`
                            }
                        </pre>
                        In our example, the client had previously registered one single hub, the <a target="_blank"
                                                                                                    href="http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt" rel="noreferrer">CSHL
                        Biology of Genomes meeting 2013 demonstration assembly hub</a>, so the response body is an array
                        with one component representing this hub. The track hub object has some string attributes
                        derived from parsing the remote hub URL specified in the url attribute.
                    </p>
                    <p>
                        As can be seen from the response output, the track hub object contains an array, trackdbs, which
                        is a list of objects containing information for each trackDb (i.e. assembly specific data files)
                        associated with the track hub: the species NCBI tax id and assembly accession, and the URI of
                        the JSON representation of the stored trackDb entity which can be retrieved from the Registry by
                        making a GET request to the <a
                        href="/docs/api/registration/reference#get_trackdb">/api/trackdb/:id</a> endpoint.
                    </p>

                    <Typography id="errors" component="h4" variant="h6">
                        What can possibly go wrong
                    </Typography>
                    <p>
                        Remember: <u>always check the response code</u> since it indicates whether the request
                        succeeded, or how it failed.
                        <ul>
                            <li>if the request is successful, the server returns HTTP response code 200 (OK)</li>
                            <li>if the credentials supplied in the authentication header are invalid, the server returns
                                HTTP response code 401
                            </li>
                            <li>if the Registry encountered an unexpected condition which prevented it from fulfilling
                                the request, it returns HTTP response code 500
                            </li>
                            <li>if the Registry is currently unable to handle the request due to a temporary overloading
                                or maintenance, it returns HTTP response code 503
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


export default RetrieveThWfDocs;