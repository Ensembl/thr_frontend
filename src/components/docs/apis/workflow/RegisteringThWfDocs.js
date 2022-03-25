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
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MainBreadcrumb from "../../../generic/MainBreadcrumb";
import ApisDocsMenu from "../ApisDocsMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
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

const RegisteringThWfDocs = () => {
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
my $HUB_URL = 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt';
my ($user, $pass, $auth_token) = ('exampleuser', 'examplepass');

$auth_token = login($server, $user, $pass);

my $request = POST("$server/api/trackhub",
                   'Content-type' => 'application/json',
                   'Content'      => to_json({ url => $HUB_URL,
                                               assemblies => {
                                                 araTha1 => 'GCA_000001735.1',
                                                 ricCom1 => 'GCA_000151685.2',
                                                  braRap1 => 'GCA_000309985.1'}}));
$request->headers->header(user       => $user);
$request->headers->header(auth_token => $auth_token);
my $response = $ua->request($request);
if ($response->is_success) {
  print "I have registered hub at $HUB_URL\\n";
} else {
  die sprintf "Couldn't register hub at $HUB_URL: %s [%d]", $response->content, $response->code;
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
hub_url = 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt'
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
headers = { 'user': user, 'auth_token': auth_token }
payload = { 'url': hub_url, 'assemblies': { 'araTha1': 'GCA_000001735.1', 'ricCom1': 'GCA_000151685.2', 'braRap1': 'GCA_000309985.1' } }
r = requests.post(server+'/api/trackhub', headers=headers, json=payload, verify=False)
if not r.ok:
   print "Couldn't register track hub at %s, reason: %s [%d]" % (hub_url, r.text, r.status_code)
   sys.exit
print "I have registered hub at %s" % hub_url

logout(server, user, auth_token)`,
        },
        {
            tabTitle: `Python3`,
            tabContent: `import requests, sys

server = 'https://www.trackhubregistry.org'
hub_url = 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt'
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
headers = { 'user': user, 'auth_token': auth_token }
payload = { 'url': hub_url, 'assemblies': { 'araTha1': 'GCA_000001735.1', 'ricCom1': 'GCA_000151685.2', 'braRap1': 'GCA_000309985.1' } }
r = requests.post(server+'/api/trackhub', headers=headers, json=payload, verify=True)
if not r.ok:
   print("Couldn't register track hub at %s, reason: %s [%d]" % (hub_url, r.text, r.status_code))
   sys.exit
print("I have registered hub at %s" % hub_url)

logout(server, user, auth_token)`,
        },
        {
            tabTitle: `Ruby`,
            tabContent: `require 'net/https'
require 'uri'

require 'rubygems'
require 'json'

server = 'https://www.trackhubregistry.org'
hub_url = 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt'
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

request = Net::HTTP::Post.new('/api/trackhub', { 'Content-Type' => 'application/json', 'User' => user, 'Auth-Token' => auth_token })
request.body = { 'url' => hub_url, 'assemblies' => { 'araTha1' => 'GCA_000001735.1', 'ricCom1' => 'GCA_000151685.2', 'braRap1' => 'GCA_000309985.1' } }.to_json
response = $http.request(request)
if response.code != "201"
  puts "Invalid response: #{response.code} #{response.body}"
  exit
end

puts "I have registered hub at #{hub_url}" 

logout(user, auth_token)`,
        },
        {
            tabTitle: `Curl`,
            tabContent: `curl 'https://www.trackhubregistry.org/api/trackhub' \\
    -H 'User: exampleuser' \\
    -H 'Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi'\\
    -X POST -d '{ "url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt", \\
                   "assemblies": { "araTha1": "GCA_000001735.1", "ricCom1": "GCA_000151685.2", "braRap1": "GCA_000309985.1" } }' \\
    --header "Content-Type:application/json"`,
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
                        Registering Track Hubs
                    </Typography>
                    <p>
                        Suppose you've just <a href="/user/register">signed up</a> with the Track Hub
                        Registry. You've also got some remote public track hubs that you want to register with and make
                        available for search on the Registry itself.
                    </p>
                    <p>
                        After you log in, you can simply register one of your publicly accessible track hubs by POSTing
                        its URL at <a
                        href="/docs/api/registration/reference#post_trackhub">/api/trackhub</a>. At
                        present, only one hub can be registered at a time. There's a plan to provide bulk request
                        support the registration of multiple data hubs at a time.
                    </p>

                    <Typography component="h4" variant="h6">
                        Prerequisites
                    </Typography>
                    <p>
                        Verify that:
                        <ul>
                            <li>Your client has successfully <a
                                href="/docs/api/registration/workflow/login">logged in</a> and have,
                                as such, obtained a valid authentication token;
                            </li>
                            <li>The remote data hub is publicly accessible and is compliant with <a target="_blank"
                                                                                                    href="http://genome-euro.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Setup" rel="noreferrer">UCSC
                                Track Hubs specification</a>.
                            </li>
                        </ul>
                    </p>

                    <Typography component="h4" variant="h6">
                        Procedure
                    </Typography>
                    <p>
                        <ol>
                            <li>Make a POST request to the <a
                                href="/docs/api/registration/reference#post_trackhub">/api/trackhub</a> endpoint
                                that includes a <em>User</em> header with your username and
                                an <em>Auth-Token</em> header with the given authentication token;
                            </li>
                            <li>Examine the response. The response code indicates whether the request succeeded, or how
                                it failed;
                            </li>
                            <li>A successful request returns an array of JSON objects, where each object is a
                                translation of the configuration of a trackDb belonging to the track hub.
                            </li>
                        </ol>
                    </p>

                    <Typography component="h4" variant="h6">
                        Example: registration request and response
                    </Typography>
                    <p>
                        In this example, we are going to register the <a target="_blank"
                                                                         href="http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt" rel="noreferrer">CSHL
                        Biology of Genomes meeting 2013 demonstration assembly hub</a>. For this, we are obviously
                        assuming we are those who have published this data and are in control of it. The Registry does
                        not make any effort to check this kind of information: you are responsible for your own actions
                        which will be eventually visible by everyone on the Registry itself.
                    </p>
                    <p>
                        Any request to the Registration API must supply the user's credentials with the following
                        headers:
                        <pre className={classes.codeBlock}>
                            {
                                `      User: [username]
      Auth-Token: [valid token]`
                            }

                        </pre>
                    </p>

                    <p>
                        The <a href="/docs/api/registration/reference#post_trackhub_msg_format">POST
                        /api/trackhub</a> message must contain the URL of remote public hub (can specify the URL of the
                        hub.txt as well), a map from assembly names as specified in the hub to INSDC accessions (in case
                        of assemblies not supported by UCSC, see <a
                        href="/docs/management/assembly_support">genome assembly support</a>), and,
                        optionally, the type of the assembly data contained in the hub, which can be one of "genomics",
                        "epigenomics", "transcriptomics", "proteomics" (default: "genomics"). By specifying the type you
                        allow the user to search for track hubs based on particular types. The hub in this example is an
                        assembly hub so we're also posting a map of hub assembly names to their respective INSDC
                        accessions. Also, we implicitly specify that the hub contains genomics data.
                    </p>

                    <p>
                        Request:
                        <pre className={classes.codeBlock}>
                            {
                                `      POST https://www.trackhubregistry.org/api/trackhub
      User: exampleuser
      Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi
      {
        "url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt",
        "assemblies": {
          "araTha1": 'GCA_000001735.1',
          "ricCom1": 'GCA_000151685.2',
          "braRap1": 'GCA_000309985.1'
        }
      }`
                            }

                        </pre>

                        The above request can be done via the clients (see <a href="#example_clients">Example
                        clients</a> section).<br/><br/>

                        Some things happen in the background once you've made the request. Most notably, the server runs
                        the <a target="_blank"
                               href="https://genome.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Debug" rel="noreferrer">hubCheck</a> from
                        UCSC to check that the files in the hub are correctly formatted. The Registry will ignore error
                        messages related to the use of deprecated features. For any other error, the request will be
                        deemed unsuccessful and the response body will report the hubCheck output report.
                    </p>
                    <p>
                        See <a href="#errors">what can possibly go wrong</a> for a comprehensive list of possible
                        errors.
                    </p>
                    <p>
                        If the request is successful, the response body is an array of JSON objects, one for each
                        configuration of assembly trackDbs belonging to the hub. These are the objects created and
                        stored in the Registry and the ones the user will be able to search on. All trackDb objects
                        specify the same 'hub' property. This allows the Registry to group trackDb documents of
                        different assemblies according to a particular hub. The response
                        header <em>Location</em> reports their respective URIs in the same order, which can be used
                        to request individual operations on a single trackDb registry entity with the <a
                        href="/docs/api/registration/reference#get_trackdb">GET|PUT|DELETE
                        /api/trackdb</a> endopoints.
                    </p>
                    <p>
                        In our example, the CSHL Biology of Genomes meeting 2013 demonstration assembly hub contains
                        data for three assemblies (araTha1, ricCom1, braRap1), so the response body is an array of three
                        trackDb objects, one for each of these assemblies.
                    </p>
                    <p>
                        Response:
                        <pre className={classes.codeBlock}>
                            {
                                `      201 Created
      Content-type: application/json; charset=utf-8
      Location: [ 
            'https://www.trackhubregistry.org/api/trackdb/KRBr5PS7RmapaFr7ofpTBA, 
            'https://www.trackhubregistry.org/api/trackdb/hB8Npdm1ST2gBwkbQThkVg', 
            'https://www.trackhubregistry.org/api/trackdb/FOEM87nETMOCOglmm0sSsg' 
      ]
      ...
      [
        {
          // ricCom1 trackDb configuration
          'owner': 'exampleuser',
          'source': {
                        'checksum': 'f9561ae6f7883add3698fad7abab7e13',
                        'url': 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/ricCom1/trackDb.txt'
                      },
          'hub': {
                     'shortLabel': 'Plants',
                     'name': 'cshl2013',
                     'url': 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt',
                     'longLabel': 'CSHL Biology of Genomes meeting 2013 demonstration assembly hub'
                   },
          'species': {
                         'scientific_name': 'Ricinus communis',
                         'common_name': 'castor bean',
                         'tax_id': '3988'
                       },
          'assembly': {
                          'synonyms': 'ricCom1',
                          'name': 'JCVI_RCG_1.1',
                          'accession': 'GCA_000151685.2'
                        },
          'configuration': {
                               'repeatMasker_': {
                                                    'priority': '149.1',
                                                    'visibility': 'dense',
                                                    'compositeTrack': 'on',
                                                    'track': 'repeatMasker_',
                                                    'shortLabel': 'RepeatMasker',
          ...
          ... 
        },
        {
          // araTha1 trackDb configuration 
          ...
          'hub': {
                     'shortLabel': 'Plants',
                     'name': 'cshl2013',
                     'url': 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt',
                     'longLabel': 'CSHL Biology of Genomes meeting 2013 demonstration assembly hub'
                   },
          ...
        },
        {
          // braRap1 trackDb configuration
          ...
          'hub': {
                     'shortLabel': 'Plants',
                     'name': 'cshl2013',
                     'url': 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt',
                     'longLabel': 'CSHL Biology of Genomes meeting 2013 demonstration assembly hub'
                   },
          ...
        }
      ]`
                            }
                        </pre>
                        The response body contains the array of three trackDb configuration objects, the first referring
                        the ricCom1 assembly and the other two to araTha1 and braRap1, respectively. The header Location
                        contains the list of the corresponding URIs in the same order as the response body array. As can
                        be seen, all three assemblies refer to the same hub.
                    </p>

                    <Typography id="errors" component="h4" variant="h6">
                        What can possibly go wrong
                    </Typography>
                    <p>
                        Remember: <u>always check the response code</u> since it indicates whether the request
                        succeeded, or how it failed.
                        <ul>
                            <li>if the request is successful, the server returns HTTP response code 201 (Created)</li>
                            <li>if the credentials supplied in the authentication header are invalid, the server returns
                                HTTP response code 401
                            </li>
                            <li>if your hub is not compliant with the UCSC hub specs, the server returns HTTP response
                                code 400. The body contains the message: "hubCheck report: ..."
                            </li>
                            <li>if the hub is not available or cannot be correctly parsed, the server returns HTTP
                                response code 400. The response body message contains the error
                            </li>
                            <li>your hub genome subdirectory names must be <a target="_blank"
                                                                              href="https://genome.ucsc.edu/FAQ/FAQreleases.html#release1" rel="noreferrer">valid
                                UCSC DB names</a> (assembly synonyms, e.g. hg38) or you must provide a map from these
                                names to their corresponding INSDC accessions (i.e. assembly accession + version,
                                e.g. <a target="_blank"
                                        href="http://www.ncbi.nlm.nih.gov/assembly/GCF_000001405.13" rel="noreferrer">GCA_000001405.1</a>).
                                If neither of the two conditions are met, the server returns HTTP response code 400 with
                                the message "Unable to find a valid INSDC accession for genome assembly [..]"
                            </li>
                            <li>if one of the hub trackDb configurations cannot be translated to <a
                                href="/docs/api/modelling">valid JSON</a>, the server returns HTTP
                                response code 400. The body contains the message "Failed: ..." with an output describing
                                the reasons why validation failed
                            </li>
                            <li>if the Registry encountered an unexpected condition which prevented it from fulfilling
                                the request, it returns HTTP response code 500
                            </li>
                            <li>if the Registry is currently unable to handle the request due to a temporary overloading
                                or maintenance, it returns HTTP response code 503
                            </li>
                        </ul>
                    </p>

                    <Typography id="example_clients" component="h4" variant="h6">
                        Example Clients
                    </Typography>
                    <br/>
                    <ExampleClientsTabs exampleClientsCode={exampleClientsCode}/>

                </main>
            </div>
        </>
    );
};


export default RegisteringThWfDocs;