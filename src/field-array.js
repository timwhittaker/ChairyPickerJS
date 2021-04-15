import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import "./gaussian.js";
var gaussian = require('./gaussian');
// Dictionary which holds names on values of members
// Should make this a database later
var members = {
  Anna:1,
  Boris:0,
  Daniel:2,
  Erik:2,
  Eric:2,
  Guillaume:0,
  Haomiao:0,
  Huan:2,
  Luis:2,
  Max:0,
  Michael:0,
  NMichael:0,
  Nils:0,
  Rami:0,
  Soham:0,
  Tim:0,
  Will:2,
  Zhenwei:0,
  Zhen:1,
  Feng:1,
  Reed:1,
  Conner:0,
  Aman:0
};

var previous_chairs = {
  Anna:0,
  Boris:0,
  Daniel:0,
  Erik:0,
  Eric:0,
  Guillaume:0,
  Haomiao:2,
  Huan:0,
  Luis:0,
  Max:1,
  Michael:2,
  NMichael:2,
  Nils:1,
  Rami:1,
  Soham:2,
  Tim:2,
  Will:0,
  Zhenwei:1,
  Zhen:0,
  Feng:2,
  Reed:1,
  Conner:2,
  Aman:0
};

var member_scores = {
  Anna:0,
  Boris:0,
  Daniel:0,
  Erik:0,
  Eric:0,
  Guillaume:0,
  Haomiao:0,
  Huan:0,
  Luis:0,
  Max:0,
  Michael:0,
  NMichael:0,
  Nils:0,
  Rami:0,
  Soham:0,
  Tim:0,
  Will:0,
  Zhenwei:0,
  Zhen:0,
  Feng:0,
  Reed:0,
  Conner:0,
  Aman:0
};

function computeScore(values)
{
  let i;
  for (i=0; i < values.speakers.length; i++)
  {
    member_scores[values.speakers[i]] += 2;
  }
  for (i=0; i < values.commenters.length; i++)
  {
    member_scores[values.commenters[i]] += 1;
  }
  for(const key in members)
  {
    member_scores[key] += members[key] + 2*previous_chairs[key]
  }
  
  var distribution = gaussian(0, 5);
  // Take a random sample using inverse transform sampling method.
  var sample = distribution.ppf(Math.random());
}

// Form stuff
const Speakers = () => (
  <div>
    <h1>Speakers</h1>
    <Formik
      
      initialValues={{ speakers: [], commenters: [] }}
      onSubmit={(values) =>
        setTimeout(() => {
          computeScore(values);
          alert(JSON.stringify(member_scores, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <Form autocomplete="off">
          <FieldArray
            name="speakers"
            render={(arrayHelpers) => (
              <div>
                {values.speakers && values.speakers.length > 0 ? (
                  values.speakers.map((speakers, index) => (
                    <div key={index}>
                      <Field name={`speakers.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} 
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all friends from the list */}
                    Add a speaker
                  </button>
                )}
                
              </div>
            )}
          />
          <h1>Commenters</h1>
          <FieldArray
            name="commenters"
            render={(arrayHelpers) => (
              <div>
                {values.commenters && values.commenters.length > 0 ? (
                  values.commenters.map((commenters, index) => (
                    <div key={index}>
                      <Field name={`commenters.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} 
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all friends from the list */}
                    Add a commenter
                  </button>
                )}
                
              </div>
            )}
          />
          <h1>Current Chair</h1>
          <Field name="Chair">
          </Field>
          <div>
                  <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    />
  </div>
);

export default Speakers;



