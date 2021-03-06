Feature: Admin change facility settings
  Admin needs to be able to change the user sign-in/up, self-edit, and content download options according to the needs of the facility

  Background:
    Given I am signed in to Kolibri as admin user
      And I am on *Facility > Settings* page
      And there are learner and coach user accounts created in the facility

  Scenario: Allow username edit
    Given the *Allow learners and coaches to edit their username* checkbox is checked
    When I uncheck the *Allow learners and coaches to edit their username* checkbox
      And I click the *Save changes* button
      And I sign out
      And I sign in as learner <learner>, or coach <coach>
      And I (as learner <learner>, or coach <coach>) open the user menu
      And I select *Profile*
    Then I (as learner <learner>, or coach <coach>) see that the *Username* field is not editable

  Scenario: Allow full name edit
    Given the *Allow learners and coaches to edit their full name* checkbox is checked
    When I uncheck the *Allow learners and coaches to edit their full name* checkbox
      And I click the *Save changes* button
      And I sign out
      And I sign in as learner <learner>, or coach <coach>
      And I (as learner <learner>, or coach <coach>) open the user menu
      And I select *Profile*
    Then I (as learner <learner>, or coach <coach>) see that the *Full name* field is not editable

  Scenario: Allow visitors to sign-up
    Given the *Allow learners to sign-up on this device* checkbox is unchecked
    When I check the *Allow learners to sign-up on this device* checkbox
      And I click the *Save changes* button
      And I sign out
    Then I see the *Create an account* button on the sign-in page

  Scenario: Allow simplified sign-in
    Given the *Allow learners to sign in with no password* checkbox is unchecked
    When I check the *Allow learners to sign in with no password* checkbox
      And I click the *Save changes* button
      And I sign out
    Then I don't see the *Password* field on the sign-in page
      And I'm able to sign-in as learner <learner> and no password

  Scenario: Allow content download
    Given the *Show 'download' button with content* checkbox is unchecked
    When I check the *Show 'download' button with content* checkbox
      And I click the *Save changes* button
    When I go to *Learn > Channels* page
      And browse any channel's topics until I open an single resource
    Then I see the *Download content* button

Examples:
| full_name | username | password |
| Pinco P.  | coach    | coach    |
| Neela R.  | ccoach   | ccoach   |
| John C.   | learner  | learner  |
