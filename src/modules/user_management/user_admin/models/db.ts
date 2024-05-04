import {
    // Model,
    Sequelize,
} from 'sequelize';

import * as user_model from './user_model';
import * as project_model from '../../user_admin copy/models/project_model';
import * as student_attendances_model from './61_student_attendances_model';
import * as teacher_attendances_model from './62_teacher_attendances_model';
import * as staff_attendances_model from './63_staff_attendances_model';
import * as leave_types_model from './64_leave_types_model';
import * as leave_applications_model from './65_leave_applications_model';
import * as leave_application_paids_model from './66_leave_application_paids_model';
import * as academic_calendars_model from './71_academic_calendars_model';
import * as academic_calendar_event_types from './72_academic_calendar_event_types_model';
import * as branch_employee_job_pay_grades_model from './81_brach_employee_job_pay_grades_model';
import * as branch_employee_job_positions_model from './82_branch_employee_job_positions_model';
import * as branch_employee_salaries_model from './83_branch_employee_salaries_model';
import * as branch_employee_payroll_transactions_model from './84_branch_employee_payroll_transactions_model';
import * as account_categories_model from './91_account_categories_model';
import * as accounts_model from './92_accounts_model';
import * as account_periods_model from './93_accounts_periods_model';
import * as budgets_model from './94_budgets_model';
import * as account_logs_model from './95_account_logs_model';
import * as account_vouchers_model from './96_account_vouchers_model';
import * as account_money_transfer_to_users_model from './97_account_money_transfer_to_user_model';
import * as account_fees_collections_model from './98_account_fees_collections_model';
import * as account_fees_collection_details_model from './99_account_fees_collection_details_model';
// import * as money_receipt_books_model from './910_money_receipt_books_model';
import * as investors_model from './911_investors_model';

require('dotenv').config();

let host = process?.env.DB_HOST || '';
let post = process?.env.DB_PORT || '';
let user = process?.env.DB_USER || '';
let pass = process?.env.DB_PASS || '';
let database = process?.env.DB_DATABASE || '';

const sequelize = new Sequelize(
    `mysql://${user}:${pass}@${host}:${post}/${database}`,
);

interface models {
    User: typeof user_model.DataModel;
    Project: typeof project_model.DataModel;
    StudentAttendancesModel: typeof student_attendances_model.DataModel;
    TeacherAttendancesModel: typeof teacher_attendances_model.DataModel;
    StaffAttendancesModel: typeof staff_attendances_model.DataModel;
    LeaveTypesModel: typeof leave_types_model.DataModel;
    LeaveApplicationsModel: typeof leave_applications_model.DataModel;
    LeaveApplicationPaidsModel: typeof leave_application_paids_model.DataModel;
    AcademicCalendarsModel: typeof academic_calendars_model.DataModel;
    AcademicCalendarEventTypesModel: typeof academic_calendar_event_types.DataModel;
    BranchEmployeeJobPayGradesModel: typeof branch_employee_job_pay_grades_model.DataModel;
    BranchEmployeeJobPositionsModel: typeof branch_employee_job_positions_model.DataModel;
    BranchEmployeeSalariesModel: typeof branch_employee_salaries_model.DataModel;
    BranchEmployeePayrollTransactionsModel: typeof branch_employee_payroll_transactions_model.DataModel;
    AccountCategoriesModel: typeof account_categories_model.DataModel;
    AccountsModel: typeof accounts_model.DataModel;
    AccountPeriodsModel: typeof account_periods_model.DataModel;
    BudgetsModel: typeof budgets_model.DataModel;
    AccountVouchersModel: typeof account_vouchers_model.DataModel;
    AccountMoneyTransferToUsersModel: typeof account_money_transfer_to_users_model.DataModel;
    AccountFeesCollectionsModel: typeof account_fees_collections_model.DataModel;
    AccountFeesCollectionDetailsModel: typeof account_fees_collection_details_model.DataModel;
    AccountLogsModel: typeof account_logs_model.DataModel;
    // MoneyRecieptBooksModel: typeof money_receipt_books_model.DataModel;
    InvestorsModel: typeof investors_model.DataModel;

    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const User = user_model.init(sequelize);
    const Project = project_model.init(sequelize);
    const StudentAttendancesModel = student_attendances_model.init(sequelize);
    const TeacherAttendancesModel = teacher_attendances_model.init(sequelize);
    const StaffAttendancesModel = staff_attendances_model.init(sequelize);
    const LeaveTypesModel = leave_types_model.init(sequelize);
    const LeaveApplicationsModel = leave_applications_model.init(sequelize);
    const LeaveApplicationPaidsModel =
        leave_application_paids_model.init(sequelize);
    const AcademicCalendarsModel = academic_calendars_model.init(sequelize);
    const AcademicCalendarEventTypesModel =
        academic_calendar_event_types.init(sequelize);
    const BranchEmployeeJobPayGradesModel =
        branch_employee_job_pay_grades_model.init(sequelize);
    const BranchEmployeeJobPositionsModel =
        branch_employee_job_positions_model.init(sequelize);
    const BranchEmployeeSalariesModel =
        branch_employee_salaries_model.init(sequelize);
    const BranchEmployeePayrollTransactionsModel =
        branch_employee_payroll_transactions_model.init(sequelize);
    const AccountCategoriesModel = account_categories_model.init(sequelize);
    const AccountsModel = accounts_model.init(sequelize);
    const AccountPeriodsModel = account_periods_model.init(sequelize);
    const BudgetsModel = budgets_model.init(sequelize);
    const AccountVouchersModel = account_vouchers_model.init(sequelize);
    const AccountMoneyTransferToUsersModel =
        account_money_transfer_to_users_model.init(sequelize);
    const AccountFeesCollectionsModel =
        account_fees_collections_model.init(sequelize);
    const AccountFeesCollectionDetailsModel =
        account_fees_collection_details_model.init(sequelize);
    const AccountLogsModel = account_logs_model.init(sequelize);
    // const MoneyRecieptBooksModel = money_receipt_books_model.init(sequelize);
    const InvestorsModel = investors_model.init(sequelize);

    await sequelize.sync();

    Project.hasOne(User, {
        sourceKey: 'user_id',
        foreignKey: 'id',
        as: 'user',
    });

    User.hasMany(Project, {
        sourceKey: 'id',
        foreignKey: 'user_id',
        as: 'projects',
    });

    let models: models = {
        User,
        Project,
        StudentAttendancesModel,
        TeacherAttendancesModel,
        StaffAttendancesModel,
        LeaveTypesModel,
        LeaveApplicationsModel,
        LeaveApplicationPaidsModel,
        AcademicCalendarsModel,
        AcademicCalendarEventTypesModel,
        BranchEmployeeJobPayGradesModel,
        BranchEmployeeJobPositionsModel,
        BranchEmployeeSalariesModel,
        BranchEmployeePayrollTransactionsModel,
        AccountCategoriesModel,
        AccountsModel,
        AccountPeriodsModel,
        BudgetsModel,
        AccountVouchersModel,
        AccountMoneyTransferToUsersModel,
        AccountFeesCollectionsModel,
        AccountFeesCollectionDetailsModel,
        AccountLogsModel,
        InvestorsModel,

        sequelize,
    };
    return models;
};
export default db;
