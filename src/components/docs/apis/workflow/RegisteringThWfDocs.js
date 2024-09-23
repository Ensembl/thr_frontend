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
import {Alert} from "@mui/lab";

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
            tabContent: `#!/usr/bin/perl
use strict;
use warnings;
use JSON;
use LWP::UserAgent;

my $SERVER = '`+ window.location.origin +`';
# Change these variables
my $HUB_URL = 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt';
my $USER = 'username';
my $PASSWORD = 'password';
# Provide assemblies mapping (Only if needed)
my %ASSEMBLIES_MAPPING = (
    'araTha1' => 'GCA_000001735.1',
    'ricCom1' => 'GCA_000151685.2',
    'braRap1' => 'GCA_000309985.1'
);

sub login {
    my ($server) = @_;
    my $ua = LWP::UserAgent->new;
    my $res = $ua->post(
        "$server/api/login",
        'Content-Type' => 'application/json',
        Content => to_json({ username => $USER, password => $PASSWORD })
    );
    
    if (!$res->is_success) {
        print "Couldn't login, reason: ", $res->content, " [", $res->code, "]\\n";
        exit;
    }
    my $json_response = from_json($res->content);
    my $auth_token = $json_response->{'auth_token'};
    print "Logged in [$auth_token]\\n";
    return $auth_token;
}

sub logout {
    my ($server, $headers) = @_;
    my $ua = LWP::UserAgent->new;
    my $res = $ua->post("$server/api/logout", %$headers);
    
    if (!$res->is_success) {
        print "Couldn't logout, reason: ", $res->content, " [", $res->code, "]\\n";
        exit;
    }
    print "Logged out\\n";
}

sub register_trackhub {
    my ($server, $hub_url, $headers) = @_;
    my $ua = LWP::UserAgent->new;
    my $res = $ua->post(
        "$server/api/trackhub",
        'Content-Type' => 'application/json',
        Content => to_json({ url => $hub_url, assemblies => \\%ASSEMBLIES_MAPPING }),
        %$headers
    );
    
    if (!$res->is_success) {
        print "Couldn't register track hub at $hub_url, reason: ", $res->content, " [", $res->code, "]\\n";
        exit;
    }
    print "I have registered hub at $hub_url\\n";
}

my $auth_token = login($SERVER);
my %headers = (
    'user' => $USER,
    'Authorization' => "Token $auth_token"
);
register_trackhub($SERVER, $HUB_URL, \\%headers);
logout($SERVER, \\%headers);`,
        },
        {
            tabTitle: `Python2`,
            tabContent: `from __future__ import print_function
import requests
import sys

SERVER = '`+ window.location.origin +`'
# Change these variables
HUB_URL = 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt'
USER = 'username'
PASSWORD = 'password'
# Provide assemblies mapping (Only if needed)
ASSEMBLIES_MAPPING = {
    'araTha1': 'GCA_000001735.1',
    'ricCom1': 'GCA_000151685.2',
    'braRap1': 'GCA_000309985.1'
}

def login(server):
    """Logs in to the server and returns the auth token."""
    data = {
        "username": USER,
        "password": PASSWORD
    }
    headers = {"Content-Type": "application/json"}
    r = requests.post(server+'/api/login', json=data, headers=headers, verify=True)
    if not r.ok:
        print("Couldn't login, reason: %s [%d]" % (r.text, r.status_code))
        sys.exit()

    auth_token = r.json()['auth_token']
    print('Logged in [%s]' % auth_token)
    return auth_token

def logout(server, headers):
    """Logs out from the server."""
    r = requests.post(server+'/api/logout', headers=headers)
    if not r.ok:
       print("Couldn't logout, reason: %s [%d]" % (r.text, r.status_code))
       sys.exit()
    print('Logged out')

def register_trackhub(server, hub_url, headers):
    """Registers a trackhub on the server."""
    payload = {
        'url': hub_url, 
        'assemblies': ASSEMBLIES_MAPPING
    }
    r = requests.post(server+'/api/trackhub', headers=headers, json=payload, verify=True)
    if not r.ok:
        print("Couldn't register track hub at %s, reason: %s [%d]" % (hub_url, r.text, r.status_code))
        sys.exit()
    else:
        print("I have registered hub at %s" % hub_url)

auth_token = login(SERVER)
headers = {
    'user': USER,
    'Authorization': 'Token {}'.format(auth_token)
}
register_trackhub(SERVER, HUB_URL, headers)
logout(SERVER, headers)`,
        },
        {
            tabTitle: `Python3`,
            tabContent: `import requests
import sys

SERVER = '`+ window.location.origin +`'
# Change these variables
HUB_URL = 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt'
USER = 'username'
PASSWORD = 'password'
# Provide assemblies mapping (Only if needed)
ASSEMBLIES_MAPPING = {
    'araTha1': 'GCA_000001735.1',
    'ricCom1': 'GCA_000151685.2',
    'braRap1': 'GCA_000309985.1'
}

def login(server):
    """Logs in to the server and returns the auth token."""
    data = {
        "username": USER,
        "password": PASSWORD
    }
    headers = {"Content-Type": "application/json"}
    r = requests.post(server+'/api/login', json=data, headers=headers, verify=True)
    if not r.ok:
        print("Couldn't login, reason: %s [%d]" % (r.text, r.status_code))
        sys.exit

    auth_token = r.json()[u'auth_token']
    print('Logged in [%s]' % auth_token)
    return auth_token

def logout(server, headers):
    """Logs out from the server."""
    r = requests.post(server+'/api/logout', headers=headers)
    if not r.ok:
       print("Couldn't logout, reason: %s [%d]" % (r.text, r.status_code))
       sys.exit
    print('Logged out')

def register_trackhub(server, hub_url, headers):
    """Registers a trackhub on the server."""
    payload = {
        'url': hub_url, 
        'assemblies': ASSEMBLIES_MAPPING
    }
    r = requests.post(server+'/api/trackhub', headers=headers, json=payload, verify=True)
    if not r.ok:
        print("Couldn't register track hub at %s, reason: %s [%d]" % (hub_url, r.text, r.status_code))
        sys.exit
    else:
        print("I have registered hub at %s" % hub_url)


auth_token = login(SERVER)
headers = {
    'user': USER,
    'Authorization': f'Token {auth_token}'
}
register_trackhub(SERVER, HUB_URL, headers)
logout(SERVER, headers)`,
        },
        {
            tabTitle: `Ruby`,
            tabContent: `require 'net/http'
require 'uri'
require 'json'

SERVER = '`+ window.location.origin +`'
# Change these variables
HUB_URL = 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt'
USER = 'username'
PASSWORD = 'password'
# Provide assemblies mapping (Only if needed)
ASSEMBLIES_MAPPING = {
  'araTha1' => 'GCA_000001735.1',
  'ricCom1' => 'GCA_000151685.2',
  'braRap1' => 'GCA_000309985.1'
}

def login(server)
  uri = URI.parse("#{server}/api/login")
  http = Net::HTTP.new(uri.host, uri.port)
  request = Net::HTTP::Post.new(uri.path, {'Content-Type' => 'application/json'})
  request.body = {username: USER, password: PASSWORD}.to_json
  response = http.request(request)

  unless response.is_a?(Net::HTTPSuccess)
    puts "Couldn't login, reason: #{response.body} [#{response.code}]"
    exit
  end

  auth_token = JSON.parse(response.body)['auth_token']
  puts "Logged in [#{auth_token}]"
  auth_token
end

def logout(server, headers)
  uri = URI.parse("#{server}/api/logout")
  http = Net::HTTP.new(uri.host, uri.port)
  request = Net::HTTP::Post.new(uri.path, headers)
  response = http.request(request)

  unless response.is_a?(Net::HTTPSuccess)
    puts "Couldn't logout, reason: #{response.body} [#{response.code}]"
    exit
  end
  puts 'Logged out'
end

def register_trackhub(server, hub_url, headers)
  uri = URI.parse("#{server}/api/trackhub")
  http = Net::HTTP.new(uri.host, uri.port)
  request = Net::HTTP::Post.new(uri.path, headers.merge({'Content-Type' => 'application/json'}))
  request.body = {url: hub_url, assemblies: ASSEMBLIES_MAPPING}.to_json
  response = http.request(request)

  unless response.is_a?(Net::HTTPSuccess)
    puts "Couldn't register track hub at #{hub_url}, reason: #{response.body} [#{response.code}]"
    exit
  end
  puts "I have registered hub at #{hub_url}"
end

auth_token = login(SERVER)
headers = {
  'user' => USER,
  'Authorization' => "Token #{auth_token}"
}
register_trackhub(SERVER, HUB_URL, headers)
logout(SERVER, headers)`,
        },
        {
            tabTitle: `Curl`,
            tabContent: `curl '`+ window.location.origin +`/api/trackhub' \\
    -H 'User: exampleuser' \\
    -H 'Authorization: Token 6l5/GuIiOSCywuSI9HF1VUMyxtjQBj497clwb/CXPDFS0uORZL8NY3Yhi'\\
    -X POST \\
    -d '{"url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt", "assemblies": {"araTha1": "GCA_000001735.1", "ricCom1": "GCA_000151685.2", "braRap1": "GCA_000309985.1"}}' \\
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
                                an <em>Authorization: Token</em> header with the given authentication token;
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
      Authorization: Token [valid token]`
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
                                `      POST `+ window.location.origin +`/api/trackhub
      User: exampleuser
      Authorization: Token 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi
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
                        <Alert severity="warning">
                            This section needs to be updated, as for now, the response is:
                            <pre className={classes.codeBlock}>
                            {
                                `      201 Created
      Content-type: application/json; charset=utf-8
      {
	    "success": "The hub is submitted successfully"                                                         
      }`
                            }
                        </pre>
                        </Alert>
                        <pre className={classes.codeBlock}>
                            {
                                `      201 Created
      Content-type: application/json; charset=utf-8
      Location: [ 
        '`+ window.location.origin +`/api/trackdb/KRBr5PS7RmapaFr7ofpTBA, 
        '`+ window.location.origin +`/api/trackdb/hB8Npdm1ST2gBwkbQThkVg', 
        '`+ window.location.origin +`/api/trackdb/FOEM87nETMOCOglmm0sSsg' 
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
            }
            ...
          }
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