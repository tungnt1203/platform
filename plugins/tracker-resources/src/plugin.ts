//
// Copyright © 2022 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
import { Client, Doc, DocumentQuery, Ref } from '@hcengineering/core'
import type { IntlString, Metadata, Resource } from '@hcengineering/platform'
import { mergeIds } from '@hcengineering/platform'
import { AnyComponent } from '@hcengineering/ui'
import tracker, { trackerId } from '../../tracker/lib'
import { IssueDraft } from '@hcengineering/tracker'
import { SortFunc } from '@hcengineering/view'

export default mergeIds(trackerId, tracker, {
  string: {
    More: '' as IntlString,
    Delete: '' as IntlString,
    Open: '' as IntlString,
    Default: '' as IntlString,
    MakeDefault: '' as IntlString,
    Members: '' as IntlString,
    Inbox: '' as IntlString,
    MyIssues: '' as IntlString,
    ViewIssue: '' as IntlString,
    IssueCreated: '' as IntlString,
    Issues: '' as IntlString,
    Views: '' as IntlString,
    Active: '' as IntlString,
    AllIssues: '' as IntlString,
    ActiveIssues: '' as IntlString,
    BacklogIssues: '' as IntlString,
    Backlog: '' as IntlString,
    Board: '' as IntlString,
    Project: '' as IntlString,
    Projects: '' as IntlString,
    AllProjects: '' as IntlString,
    BacklogProjects: '' as IntlString,
    ActiveProjects: '' as IntlString,
    ClosedProjects: '' as IntlString,
    NewProject: '' as IntlString,
    CreateProject: '' as IntlString,
    ProjectNamePlaceholder: '' as IntlString,
    ProjectDescriptionPlaceholder: '' as IntlString,
    ProjectStatusPlaceholder: '' as IntlString,
    ProjectLead: '' as IntlString,
    ProjectMembers: '' as IntlString,
    StartDate: '' as IntlString,
    TargetDate: '' as IntlString,
    Planned: '' as IntlString,
    InProgress: '' as IntlString,
    Paused: '' as IntlString,
    Completed: '' as IntlString,
    Canceled: '' as IntlString,
    CreateTeam: '' as IntlString,
    NewTeam: '' as IntlString,
    TeamTitlePlaceholder: '' as IntlString,
    MakePrivate: '' as IntlString,
    MakePrivateDescription: '' as IntlString,
    ChooseIcon: '' as IntlString,
    AddIssue: '' as IntlString,
    NewIssue: '' as IntlString,
    ResumeDraft: '' as IntlString,
    NewSubIssue: '' as IntlString,
    Team: '' as IntlString,
    SelectIssue: '' as IntlString,
    SelectTeam: '' as IntlString,
    SaveIssue: '' as IntlString,
    Todo: '' as IntlString,
    Done: '' as IntlString,
    SetPriority: '' as IntlString,
    SetStatus: '' as IntlString,
    Priority: '' as IntlString,
    NoPriority: '' as IntlString,
    Urgent: '' as IntlString,
    High: '' as IntlString,
    Medium: '' as IntlString,
    Low: '' as IntlString,
    Title: '' as IntlString,
    Identifier: '' as IntlString,
    Description: '' as IntlString,
    Status: '' as IntlString,
    DefaultIssueStatus: '' as IntlString,
    IssueStatuses: '' as IntlString,
    EditWorkflowStatuses: '' as IntlString,
    EditTeam: '' as IntlString,
    ManageWorkflowStatuses: '' as IntlString,
    AddWorkflowStatus: '' as IntlString,
    EditWorkflowStatus: '' as IntlString,
    DeleteWorkflowStatus: '' as IntlString,
    DeleteWorkflowStatusConfirm: '' as IntlString,
    DeleteWorkflowStatusError: '' as IntlString,
    DeleteWorkflowStatusErrorDescription: '' as IntlString,
    Name: '' as IntlString,
    StatusCategory: '' as IntlString,
    CategoryBacklog: '' as IntlString,
    CategoryUnstarted: '' as IntlString,
    CategoryStarted: '' as IntlString,
    CategoryCompleted: '' as IntlString,
    CategoryCanceled: '' as IntlString,
    Number: '' as IntlString,
    Assignee: '' as IntlString,
    AssignTo: '' as IntlString,
    AssignedTo: '' as IntlString,
    SubIssues: '' as IntlString,
    SubIssuesList: '' as IntlString,
    SetParent: '' as IntlString,
    ChangeParent: '' as IntlString,
    RemoveParent: '' as IntlString,
    OpenParent: '' as IntlString,
    OpenSubIssues: '' as IntlString,
    AddSubIssues: '' as IntlString,
    BlockedBy: '' as IntlString,
    RelatedTo: '' as IntlString,
    Comments: '' as IntlString,
    Attachments: '' as IntlString,
    Labels: '' as IntlString,
    Space: '' as IntlString,
    SetDueDate: '' as IntlString,
    ChangeDueDate: '' as IntlString,
    ModificationDate: '' as IntlString,
    Issue: '' as IntlString,
    IssueTemplate: '' as IntlString,
    Document: '' as IntlString,
    DocumentIcon: '' as IntlString,
    DocumentColor: '' as IntlString,
    Rank: '' as IntlString,
    DueDatePopupTitle: '' as IntlString,
    DueDatePopupOverdueTitle: '' as IntlString,
    DueDatePopupDescription: '' as IntlString,
    DueDatePopupOverdueDescription: '' as IntlString,
    Grouping: '' as IntlString,
    Ordering: '' as IntlString,
    CompletedIssues: '' as IntlString,
    ShowEmptyGroups: '' as IntlString,
    NoGrouping: '' as IntlString,
    NoAssignee: '' as IntlString,
    LastUpdated: '' as IntlString,
    DueDate: '' as IntlString,
    Manual: '' as IntlString,
    All: '' as IntlString,
    PastWeek: '' as IntlString,
    PastMonth: '' as IntlString,
    Filter: '' as IntlString,
    ClearFilters: '' as IntlString,
    Back: '' as IntlString,
    AssetLabel: '' as IntlString,
    AddToProject: '' as IntlString,
    MoveToProject: '' as IntlString,
    NoProject: '' as IntlString,
    ProjectLeadTitle: '' as IntlString,
    ProjectMembersTitle: '' as IntlString,
    ProjectLeadSearchPlaceholder: '' as IntlString,
    ProjectMembersSearchPlaceholder: '' as IntlString,
    List: '' as IntlString,
    NumberLabels: '' as IntlString,
    Roadmap: '' as IntlString,
    MoveToTeam: '' as IntlString,
    Duplicate: '' as IntlString,

    IssueTitlePlaceholder: '' as IntlString,
    SubIssueTitlePlaceholder: '' as IntlString,
    IssueDescriptionPlaceholder: '' as IntlString,
    SubIssueDescriptionPlaceholder: '' as IntlString,
    Unassigned: '' as IntlString,
    AddIssueTooltip: '' as IntlString,
    NewIssueDialogClose: '' as IntlString,
    NewIssueDialogCloseNote: '' as IntlString,

    CopyIssueUrl: '' as IntlString,
    CopyIssueId: '' as IntlString,
    CopyIssueBranch: '' as IntlString,
    CopyIssueTitle: '' as IntlString,

    FilterIs: '' as IntlString,
    FilterIsNot: '' as IntlString,
    FilterIsEither: '' as IntlString,
    FilterStatesCount: '' as IntlString,

    EditIssue: '' as IntlString,

    Save: '' as IntlString,
    IncludeItemsThatMatch: '' as IntlString,
    AnyFilter: '' as IntlString,
    AllFilters: '' as IntlString,
    NoDescription: '' as IntlString,

    Assigned: '' as IntlString,
    Created: '' as IntlString,
    Subscribed: '' as IntlString,

    Relations: '' as IntlString,
    RemoveRelation: '' as IntlString,
    AddBlockedBy: '' as IntlString,
    AddIsBlocking: '' as IntlString,
    AddRelatedIssue: '' as IntlString,
    RelatedIssue: '' as IntlString,
    BlockedIssue: '' as IntlString,
    BlockingIssue: '' as IntlString,
    BlockedBySearchPlaceholder: '' as IntlString,
    IsBlockingSearchPlaceholder: '' as IntlString,
    RelatedIssueSearchPlaceholder: '' as IntlString,
    Blocks: '' as IntlString,
    Related: '' as IntlString,

    DurMinutes: '' as IntlString,
    DurHours: '' as IntlString,
    DurDays: '' as IntlString,
    DurMonths: '' as IntlString,
    DurYears: '' as IntlString,
    StatusHistory: '' as IntlString,
    AddLabel: '' as IntlString,

    Sprint: '' as IntlString,
    Sprints: '' as IntlString,
    AllSprints: '' as IntlString,
    PlannedSprints: '' as IntlString,
    ActiveSprints: '' as IntlString,
    ClosedSprints: '' as IntlString,
    SprintNamePlaceholder: '' as IntlString,
    SprintLead: '' as IntlString,
    SprintLeadTitle: '' as IntlString,
    SprintLeadSearchPlaceholder: '' as IntlString,
    SprintMembersTitle: '' as IntlString,
    SprintMembersSearchPlaceholder: '' as IntlString,

    NewSprint: '' as IntlString,
    CreateSprint: '' as IntlString,
    AddToSprint: '' as IntlString,
    MoveToSprint: '' as IntlString,
    NoSprint: '' as IntlString,

    MoveAndDeleteSprint: '' as IntlString,
    MoveAndDeleteSprintConfirm: '' as IntlString,

    Estimation: '' as IntlString,
    ReportedTime: '' as IntlString,
    TimeSpendReport: '' as IntlString,
    TimeSpendReportAdd: '' as IntlString,
    TimeSpendReports: '' as IntlString,
    TimeSpendReportDate: '' as IntlString,
    TimeSpendReportValue: '' as IntlString,
    TimeSpendReportDescription: '' as IntlString,
    TimeSpendValue: '' as IntlString,
    TimeSpendHours: '' as IntlString,
    SprintPassed: '' as IntlString,

    ChildEstimation: '' as IntlString,
    ChildReportedTime: '' as IntlString,
    Capacity: '' as IntlString,
    CapacityValue: '' as IntlString,
    AddedReference: '' as IntlString,
    AddedAsBlocked: '' as IntlString,
    AddedAsBlocking: '' as IntlString,

    IssueTemplates: '' as IntlString,
    NewProcess: '' as IntlString,
    SaveProcess: '' as IntlString,
    NoIssueTemplate: '' as IntlString,
    TemplateReplace: '' as IntlString,
    TemplateReplaceConfirm: '' as IntlString,

    CurrentWorkDay: '' as IntlString,
    PreviousWorkDay: '' as IntlString,
    TimeReportDayTypeLabel: '' as IntlString,
    DefaultTimeReportDay: '' as IntlString,

    WorkDayLength: '' as IntlString,
    SevenHoursLength: '' as IntlString,
    EightHoursLength: '' as IntlString
  },
  component: {
    NopeComponent: '' as AnyComponent,
    Inbox: '' as AnyComponent,
    MyIssues: '' as AnyComponent,
    Views: '' as AnyComponent,
    Issues: '' as AnyComponent,
    Active: '' as AnyComponent,
    Backlog: '' as AnyComponent,
    Projects: '' as AnyComponent,
    IssuePresenter: '' as AnyComponent,
    ProjectTitlePresenter: '' as AnyComponent,
    ProjectPresenter: '' as AnyComponent,
    TitlePresenter: '' as AnyComponent,
    ModificationDatePresenter: '' as AnyComponent,
    PriorityPresenter: '' as AnyComponent,
    PriorityEditor: '' as AnyComponent,
    PriorityRefPresenter: '' as AnyComponent,
    ProjectEditor: '' as AnyComponent,
    SprintEditor: '' as AnyComponent,
    StatusPresenter: '' as AnyComponent,
    StatusRefPresenter: '' as AnyComponent,
    StatusEditor: '' as AnyComponent,
    AssigneePresenter: '' as AnyComponent,
    DueDatePresenter: '' as AnyComponent,
    EditIssueTemplate: '' as AnyComponent,
    CreateTeam: '' as AnyComponent,
    TeamPresenter: '' as AnyComponent,
    NewIssueHeader: '' as AnyComponent,
    IconPresenter: '' as AnyComponent,
    LeadPresenter: '' as AnyComponent,
    TargetDatePresenter: '' as AnyComponent,
    ProjectMembersPresenter: '' as AnyComponent,
    ProjectStatusPresenter: '' as AnyComponent,
    ProjectStatusEditor: '' as AnyComponent,
    SetDueDateActionPopup: '' as AnyComponent,
    SetParentIssueActionPopup: '' as AnyComponent,
    EditProject: '' as AnyComponent,
    IssuesView: '' as AnyComponent,
    KanbanView: '' as AnyComponent,
    Roadmap: '' as AnyComponent,
    TeamProjects: '' as AnyComponent,
    IssuePreview: '' as AnyComponent,
    RelationsPopup: '' as AnyComponent,
    SprintRefPresenter: '' as AnyComponent,
    Sprints: '' as AnyComponent,
    SprintPresenter: '' as AnyComponent,
    SprintStatusPresenter: '' as AnyComponent,
    SprintTitlePresenter: '' as AnyComponent,
    SprintMembersPresenter: '' as AnyComponent,
    ReportedTimeEditor: '' as AnyComponent,
    TimeSpendReport: '' as AnyComponent,
    EstimationEditor: '' as AnyComponent,
    TemplateEstimationEditor: '' as AnyComponent,

    ProjectSelector: '' as AnyComponent,

    IssueTemplates: '' as AnyComponent,
    IssueTemplatePresenter: '' as AnyComponent
  },
  metadata: {
    CreateIssueDraft: '' as Metadata<IssueDraft>
  },
  function: {
    IssueTitleProvider: '' as Resource<(client: Client, ref: Ref<Doc>) => Promise<string>>,
    GetIssueId: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<string>>,
    GetIssueLink: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<string>>,
    GetIssueTitle: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<string>>,
    IssueStatusSort: '' as SortFunc,
    IssuePrioritySort: '' as SortFunc,
    SprintSort: '' as SortFunc,
    SubIssueQuery: '' as Resource<(value: any, query: DocumentQuery<Doc>) => DocumentQuery<Doc>>
  }
})
