import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-center  mx-auto container-md'>
                <h1 className='text-success m-3'>Get some Knowledge</h1>
                <h5 className='m-3'>Difference between Authorization & Authentication</h5>
                <table class="table table-bordered border-secondary ">
                    <thead>
                        <tr>
                            <th scope="col">Authentication</th>
                            <th scope="col">Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Authentication verifies who the user is</td>
                            <td>Authorization determines what resources a user can access.</td>
                        </tr>
                        <tr>
                            <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                            <td>Authorization works through settings that are implemented and maintained by the organization.
                            </td>
                        </tr>
                        <tr>
                            <td>Authentication is the first step of a good identity and access management process.</td>
                            <td>Authorization always takes place after authentication.
                            </td>
                        </tr>
                        <tr>
                            <td>Authentication is visible to and partially changeable by the user.</td>
                            <td>Authorization isn’t visible to or changeable by the user.
                            </td>
                        </tr>
                        <tr>
                            <td>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</td>
                            <td>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h5 className='m-3'>Why we use google firebase?</h5>
                <p>
                    Google Firebase is a realtime database. It allows secure access to the database directly from client-side code so thet we can build rich, collaborative applications. Firebase persist data locally, if we are also in offline. Realtime events continue to fire, giving the end user a responsive experience. When the device is connected to the internet the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically. The Realtime Database provides a flexible, expression-based rules language, called Firebase Realtime Database Security Rules, to define how your data should be structured and when data can be read from or written to. When integrated with Firebase Authentication, developers can define who has access to what data, and how they can access it.
                </p>
            </div>
            <div className=' mx-auto container-md'>
                <h5 className='m-3 text-center'>What else we can do without Authentication @ google firebase?</h5>
                <ul className="list-unstyled">
                    <li>
                        <ul>
                            <li>Testing</li>
                            <li>Analytics</li>
                            <li>Cloud Firestore</li>
                            <li>Cloud Messaging</li>
                            <li>Cloud Storage</li>
                            <li>Performance Monitoring</li>
                            <li>Realtime Database</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;