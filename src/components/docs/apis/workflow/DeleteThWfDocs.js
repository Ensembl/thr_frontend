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

const DeleteThWfDocs = () => {
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
my $server = '`+ window.location.origin +`';
my ($user, $pass, $auth_token) = ('exampleuser', 'examplepass');

$auth_token = login($server, $user, $pass);

my $request = DELETE("$server/api/trackhub/cshl2013");
$request->headers->header(user       => $user);
$request->headers->header(auth_token => $auth_token);
my $response = $ua->request($request);
if ($response->is_success) {
  print "I have deleted the trackDBs associated to the cshl2013 hub\\n";
} else {
  die sprintf "Couldn't delete trackDBs: %s [%d]", $response->content, $response->code;
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

server = '`+ window.location.origin +`'
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
r = requests.delete(server+'/api/trackhub/cshl2013', headers={ 'user': user, 'auth_token': auth_token }, verify=False)
if not r.ok:
   print "Couldn't not delete cshl2013 hub trackDBs, reason: %s [%d]" % (r.text, r.status_code)
   sys.exit
print "I have deleted the cshl2013 hub trackDBs from the Registry"

logout(server, user, auth_token)`,
        },
        {
            tabTitle: `Python3`,
            tabContent: `import requests, sys

server = '`+ window.location.origin +`'
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
r = requests.delete(server+'/api/trackhub/cshl2013', headers={ 'user': user, 'auth_token': auth_token }, verify=True)
if not r.ok:
   print("Couldn't not delete cshl2013 hub trackDBs, reason: %s [%d]" % (r.text, r.status_code))
   sys.exit
print("I have deleted the cshl2013 hub trackDBs from the Registry")

logout(server, user, auth_token)`,
        },
        {
            tabTitle: `Ruby`,
            tabContent: `require 'net/https'
require 'uri'

require 'rubygems'
require 'json'

server = '`+ window.location.origin +`'
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

request = Net::HTTP::Delete.new('/api/trackhub/cshl2013', { 'Content-Type' => 'application/json', 'User' => user, 'Auth-Token' => auth_token })
response = $http.request(request)
if response.code != "200"
  puts "Couldn't delete cshl2013 hub trackDBs: #{response.code} #{response.body}"
  exit
end

puts "I have delete the cshl2013 hub trackDBs #{response.body}"

logout(user, auth_token)`,
        },
        {
            tabTitle: `Curl`,
            tabContent: `curl -X DELETE "`+ window.location.origin +`/api/trackhub/cshl2013" \\
     -H "User: exampleuser" \\
     -H "Authorization: Token 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi"`,
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
                    <Typography id="thdelete" component="h4" variant="h5">
                        Deleting Registered Track Hubs
                    </Typography>
                    <p>
                        Suppose one of your registered remote public hubs does not exist or it's not public any more, or
                        you simply don't want to make it available for search in the Track Hub Registry. You can delete
                        a track hub from the Registry (i.e. remove all its associated trackDBs) by making a request to
                        the <a href="/docs/api/registration/reference#delete_trackhub_id">DELETE
                        /api/trackhub/:id</a> where you specify the name of track hub (i.e. the hub attribute value in
                        the hub.txt file).
                    </p>

                    <Typography component="h4" variant="h5">
                        Prerequisites
                    </Typography>
                    <p>
                        Verify that:
                        <ul>
                            <li>your client has successfully <a
                                href="/docs/api/registration/workflow/login">logged in</a> and have,
                                as such, obtained a valid authentication token;
                            </li>
                            <li>the Registry contains trackDBs which are registered as belonging to the hub with the
                                given name
                            </li>
                        </ul>
                    </p>

                    <Typography component="h4" variant="h5">
                        Procedure
                    </Typography>
                    <p>
                        <ol>
                            <li>Make a request to the <a
                                href="/docs/api/registration/reference#delete_trackhub_id">DELETE
                                /api/trackhub/:id</a> endpoint that includes a User header with your username, and an
                                Authorization: Token header with the given authentication token; the :id parameter must be
                                replaced with the name of the hub as it is known by the Registry;
                            </li>
                            <li>Examine the response. The response code indicates whether the request succeeded, or how
                                it failed;
                            </li>
                        </ol>
                    </p>

                    <Typography component="h4" variant="h5">
                        Example: track hub deletion request and response
                    </Typography>
                    <p>
                        In this example, we follow the pattern of the previous steps where we have registered and
                        updated the <a target="_blank" href="http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt" rel="noreferrer">CSHL
                        Biology of Genomes meeting 2013 demonstration assembly hub</a>. We now want to delete its
                        records in the Registry, corresponding to three trackDbs associated to the an equivalent number
                        of plant assemblies where <strong>1</strong> is the track hub ID.
                    </p>

                    <p>
                        <pre className={classes.codeBlock}>
                            {
                                `      DELETE `+ window.location.origin +`/api/trackhub/1
      User: exampleuser
      Authorization: Token 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi`
                            }

                        </pre>
                        Response:
                        <pre className={classes.codeBlock}>
                            {
                                `      HTTP/1.0 200 OK
      {
          "success": "Hub 'cshl2013' is deleted successfully"
      }`
                            }
                        </pre>
                    </p>

                    <Typography id="errors" component="h4" variant="h5">
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
                            <li>if the Registry cannot find any trackDB associated to a hub with the supplied name, it
                                returns HTTP response code 404, with the message "Could not find ..."
                            </li>
                            <li>if the Registry encountered an unexpected condition which prevented it from fulfilling
                                the request, it returns HTTP response code 500
                            </li>
                            <li>if the Registry is currently unable to handle the request due to a temporary overloading
                                or maintenance, it returns HTTP response code 503
                            </li>
                        </ul>
                    </p>

                    {/* NOTE: This part was commented on the Perl code, I kept it just in case if we need to add it in the future */}

                    {/*<p>*/}
                    {/*  Suppose one of your remote public hubs does not exist or it's not public any more, or you simply don't want to make it available for search in the Track Hub Registry. Since a track hub in not directly stored in the Registry, to remove it you have to delete its corresponding records, i.e. <u>all</u> the trackDb entities stored in the Registry which are associated to the hub. For this, you need their URIs which you can get by making a request to the <a href="">GET /api/trackhub</a> endpoint and examining the <mark>trackdbs</mark> array of the object representing the track hub under consideration, as explained in <a href="/docs/api/registration/workflow/thlist">Retrieve the list of registered track hubs</a>.*/}
                    {/*</p>*/}

                    {/*<h4>Notes</h4>*/}
                    {/*<p>*/}
                    {/*  Alternatively, this operation can be done more simply using the <a href="/docs/dashboard#status">web interface</a>.*/}
                    {/*</p>*/}

                    {/*<h4>Prerequisites</h4>*/}
                    {/*<p>*/}
                    {/*  Verify that:*/}
                    {/*  <ul>*/}
                    {/*    <li>your client has successfully <a href="/docs/api/registration/workflow/login">logged in</a>  and have, as such, obtained a valid authentication token;</li>*/}
                    {/*    <li>you've got the IDs of the trackDb documents stored in the Registry associated with the track hub</li>*/}
                    {/*  </ul>*/}
                    {/*</p>*/}

                    {/*<h4>Procedure</h4>*/}
                    {/*<p>*/}
                    {/*  <ol>*/}
                    {/*    <li>Make multiple requests to the <a href="/docs/api/registration/reference#delete_trackdb">DELETE /api/trackdb/:id</a> endpoint, each one with the URI of a trackDb associated with the track hub you want to delete. As usual, the request includes a <mark>User</mark> header with your username and an <mark>Authorization: Token</mark> header with the given authentication token;</li>*/}
                    {/*    <li>Examine the response. The response code indicates whether the request succeeded, or how it failed;</li>*/}
                    {/*    <li>Each successful request returns a JSON object representing the deleted trackDb.</li>*/}
                    {/*  </ol>*/}
                    {/*</p>*/}

                    {/*<h4>Example: track hub deletion request and response</h4>*/}
                    {/*<p>*/}
                    {/*  In this example, we follow the pattern of the previous steps where we have registered and updated the <a target="_blank" href="http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt">CSHL Biology of Genomes meeting 2013 demonstration assembly hub</a>. We now want to delete its records in the Registry, corresponding to three trackDbs associated to the an equivalent number of plant assemblies. In the following we assume you've already got the URIs of these entities. We then make three independent requests to <a href="/docs/api/registration/reference#delete_trackdb">DELETE /api/trackhub/:id</a> endpoint, each one with a different trackDb ID:*/}
                    {/*</p>*/}

                    {/*<p>*/}
                    {/*  Request 1 (delete Ricinus communis assembly data):*/}
                    {/*  <pre>*/}
                    {/*    DELETE `+ window.location.origin +`/api/trackdb/KRBr5PS7RmapaFr7ofpTBA*/}
                    {/*    User: exampleuser*/}
                    {/*    Authorization: Token 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi*/}
                    {/*  </pre>*/}
                    {/*  Response:*/}
                    {/*  <pre>*/}
                    {/*    HTTP/1.0 200 OK*/}
                    {/*    ...*/}
                    {/*    {*/}
                    {/*      // Ricinus communis trackDb object*/}
                    {/*      ...*/}
                    {/*    }*/}
                    {/*  </pre>*/}
                    {/*  Request 2 (delete Brassica rapa assembly data):*/}
                    {/*  <pre>*/}
                    {/*    DELETE `+ window.location.origin +`/api/trackdb/FOEM87nETMOCOglmm0sSsg*/}
                    {/*    User: exampleuser*/}
                    {/*    Authorization: Token 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi*/}
                    {/*  </pre>*/}
                    {/*  Response:*/}
                    {/*  <pre>*/}
                    {/*    HTTP/1.0 200 OK*/}
                    {/*    ...*/}
                    {/*    {*/}
                    {/*      // Brassica rapa trackDb object*/}
                    {/*      ...*/}
                    {/*    }*/}
                    {/*  </pre>*/}
                    {/*  Request 3 (delete Arabidopsis thaliana assembly data):*/}
                    {/*  <pre>*/}
                    {/*    DELETE `+ window.location.origin +`/api/trackdb/hB8Npdm1ST2gBwkbQThkVg*/}
                    {/*    User: exampleuser*/}
                    {/*    Authorization: Token 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi*/}
                    {/*  </pre>*/}
                    {/*  Response:*/}
                    {/*  <pre>*/}
                    {/*    HTTP/1.0 200 OK*/}
                    {/*    ...*/}
                    {/*    {*/}
                    {/*        // Arabidopsis thaliana trackDb object*/}
                    {/*        ...*/}
                    {/*    }*/}
                    {/*  </pre>*/}
                    {/*</p>*/}

                    {/*<h4 id="errors">What can possibly go wrong</h4>*/}
                    {/*<p>*/}
                    {/*  Remember: <u>always check the response code</u> since it indicates whether the request succeeded, or how it failed.*/}
                    {/*  <ul>*/}
                    {/*    <li>if the request is successful, the server returns HTTP response code 200 (OK)</li>*/}
                    {/*    <li>if the credentials supplied in the authentication header are invalid, the server returns HTTP response code 401</li>*/}
                    {/*    <li>one of the trackDb URIs might be invalid, because:*/}
                    {/*      <ul>*/}
                    {/*        <li>the trackDb does not belong to the API user. The server in this case returns HTTP response code 400 with the message "Cannot delete: ..."</li>*/}
                    {/*        <li>the ID and hence the corresponding trackDb does not exist. The server in this case returns HTTP response code 404 with the message "Could not find: ..."</li>*/}
                    {/*      </ul>*/}
                    {/*    <li>if the Registry encountered an unexpected condition which prevented it from fulfilling the request, it returns HTTP response code 500</li>*/}
                    {/*    <li>if the Registry is currently unable to handle the request due to a temporary overloading or maintenance, it returns HTTP response code 503</li>*/}
                    {/*  </ul>*/}
                    {/*</p>*/}

                    <Typography component="h4" variant="h5">
                        Example Clients
                    </Typography>
                    <br/>

                    <ExampleClientsTabs exampleClientsCode={exampleClientsCode}/>

                </main>
            </div>
        </>
    );
};


export default DeleteThWfDocs;